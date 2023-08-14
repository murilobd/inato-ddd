import { Request, Response } from "express";
import { validationResult, ValidationChain } from "express-validator";

export abstract class BaseController {
	protected abstract executeImplementation(
		req: Request,
		res: Response
	): Promise<void | any>;

	protected abstract executeValidation(): ValidationChain;

	public validate(): ValidationChain {
		return this.executeValidation();
	}

	public failed(res: Response, error: any, code: number = 500) {
		res.type("application/json");
		let jsonError: JSON | any;
		try {
			jsonError = JSON.parse(error);
		} catch {
			jsonError = error;
		}
		return res.status(code).json({
			error: jsonError,
		});
	}

	public async execute(
		req: Request,
		res: Response
	): Promise<void | Response> {
		try {
			const result = validationResult(req);
			if (result.isEmpty()) {
				return await this.executeImplementation(req, res);
			}

			return this.failed(res, result.array(), 422);
		} catch (error) {
			console.log(`[Base Contoller]`, error);
			this.failed(res, "Something wrong is not right");
		}
	}

	public ok(res: Response, message: any, code: number = 200) {
		res.type("application/json");
		return res.status(code).json({ message });
	}
}
