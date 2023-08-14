import { Request, Response } from "express";
import { param, ValidationChain } from "express-validator";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { GetByCountryCode } from "./getByCountryCode";

export class GetByCountryCodeController extends BaseController {
	private useCase: GetByCountryCode;

	constructor(useCase: GetByCountryCode) {
		super();
		this.useCase = useCase;
	}

	executeValidation(): ValidationChain {
		return param("countryCode")
			.notEmpty()
			.trim()
			.isLength({ min: 2, max: 3 })
			.escape();
	}

	async executeImplementation(req: Request, res: Response): Promise<any> {
		const { countryCode } = req.params;

		try {
			const result = await this.useCase.execute(countryCode);
			return this.ok(res, result);
		} catch (error) {
			return this.failed(res, error);
		}
	}
}
