import { GetBySponsor } from "./getBySponsor";
import { GetBySponsorController } from "./getBySponsor.controller";

const getBySponsor = new GetBySponsor();
const getBySponsorController = new GetBySponsorController(getBySponsor);

export { getBySponsorController };
