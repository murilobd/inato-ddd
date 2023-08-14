import { program, Option } from "commander";
import { parseApiResponse, ApiResponse } from "./utils";

program
	.name("inato-cli")
	.command("trials")
	.description("get the list of clinical trials")
	.addOption(
		new Option("-p, --path <type>", "the api path to call").choices([
			"country",
			"sponsor",
		])
	)
	.addOption(
		new Option(
			"-s, --search <search param>",
			"search filter. Country Code are 2 letters; Sponsor is sponsor name"
		)
	)
	.action(async function ({ path, search }) {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/trials/${path}/${search}`
			);
			const status = response.status;
			// something went wrong
			if (status >= 300) {
				return console.log(
					"Ops! Something went wrong on API side (or maybe you did something unexpected? Call the tech team, please!)"
				);
			}

			const jsonResp = await response.json();
			return console.log(await parseApiResponse(jsonResp as ApiResponse));
		} catch {
			return console.log("Looks like API is not running");
		}
	})
	.parseAsync(process.argv);
