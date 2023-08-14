import { Request, Response } from "express";
import { param, ValidationChain } from "express-validator";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { GetBySponsor } from "./getBySponsor";

export class GetBySponsorController extends BaseController {
	private useCase: GetBySponsor;

	constructor(useCase: GetBySponsor) {
		super();
		this.useCase = useCase;
	}

	executeValidation(): ValidationChain {
		return param("sponsor").notEmpty().trim().escape();
	}

	async executeImplementation(req: Request, res: Response): Promise<any> {
		const { sponsor } = req.params;

		try {
			const result = await this.useCase.execute(sponsor);
			return this.ok(res, result);
		} catch (error) {
			return this.failed(res, error);
		}
	}
}
