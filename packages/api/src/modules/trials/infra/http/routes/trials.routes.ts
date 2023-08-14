import { Request, Response, Router } from "express";
import { getByCountryCodeController } from "../../../useCases/getByCountryCode";
import { getBySponsorController } from "../../../useCases/getBySponsor";

const trialsRouter = Router();

/**
 * Ideally it should have a single entrypoint here and this one would filter based on the query parameters (/trials?countrycode=fr; /trials?sponsor=sanofi); /trials?countrycode=fr&sponsor=sanofi&canceled=false; etc...). The reason I did like that was to simulate 2 different use cases.
 */

trialsRouter.get(
	"/country/:countryCode",
	getByCountryCodeController.validate(),
	(req: Request, res: Response) =>
		getByCountryCodeController.execute(req, res)
);

trialsRouter.get(
	"/sponsor/:sponsor",
	getBySponsorController.validate(),
	(req: Request, res: Response) => getBySponsorController.execute(req, res)
);

export { trialsRouter };
