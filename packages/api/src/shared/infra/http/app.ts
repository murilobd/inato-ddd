import express, { Express } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import { v1Router } from "./api/v1";

const app: Express = express();
const port = 8080;

app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/v1", v1Router);

app.listen(port, () => {
	console.log(`[INATO API] Listening on port ${port}`);
});
