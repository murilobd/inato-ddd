import { Router } from "express";
import { trialsRouter } from "../../../../modules/trials/infra/http/routes";

const v1Router = Router();

v1Router.get("/", (req, res) => {
	return res.json({ message: "v1 all good to go!" });
});

v1Router.use("/trials", trialsRouter);

export { v1Router };
