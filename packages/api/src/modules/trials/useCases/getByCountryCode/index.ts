import { GetByCountryCode } from "./getByCountryCode";
import { GetByCountryCodeController } from "./getByCountryCode.controller";

const getByCountryCode = new GetByCountryCode();
const getByCountryCodeController = new GetByCountryCodeController(
	getByCountryCode
);

export { getByCountryCodeController };
