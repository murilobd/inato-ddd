import express from "express";
import request from "supertest";
import { trialsRouter } from "./index";
jest.mock("../../../../../shared/external-service/api.service");

const app = express();
app.use("/", trialsRouter);

describe("Trials routes", () => {
	describe("[GET /country] Country code", () => {
		it("should validate and return list of trials from France", async () => {
			const response = await request(app).get("/country/fr");
			expect(response.status).toBe(200);
			expect(response.body).toStrictEqual({
				message: [
					{
						name: "valid",
						country: "FR",
						start_date: "2019-01-01",
						end_date: "2025-08-01",
						sponsor: "Sanofi",
						canceled: false,
						study_type: "interventional",
						primary_purpose: "treatment",
					},
				],
			});
		});

		it("should return an invalidation response", async () => {
			const response = await request(app).get("/country/invalid");
			expect(response.status).toBe(422);
			expect(response.body).toStrictEqual({
				error: [
					{
						location: "params",
						msg: "Invalid value",
						path: "countryCode",
						type: "field",
						value: "invalid",
					},
				],
			});
		});

		it("should return empty list", async () => {
			const response = await request(app).get("/country/br");
			expect(response.status).toBe(200);
			expect(response.body).toStrictEqual({
				message: [],
			});
		});
	});

	describe("[GET /sponsor] Sponsor", () => {
		it("should validate and return list of trials that belongs to Sanofi", async () => {
			const response = await request(app).get("/sponsor/sanofi");
			expect(response.status).toBe(200);
			expect(response.body).toStrictEqual({
				message: [
					{
						name: "valid",
						country: "FR",
						start_date: "2019-01-01",
						end_date: "2025-08-01",
						sponsor: "Sanofi",
						canceled: false,
						study_type: "interventional",
						primary_purpose: "treatment",
					},
				],
			});
		});

		it("should return empty list", async () => {
			const response = await request(app).get("/sponsor/eurofarma");
			expect(response.status).toBe(200);
			expect(response.body).toStrictEqual({
				message: [],
			});
		});

		it("should return 404", async () => {
			const response = await request(app).get("/trials/sponsor/");
			expect(response.status).toBe(404);
		});
	});
});
