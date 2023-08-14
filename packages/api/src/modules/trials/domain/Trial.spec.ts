import { ITrial, Trial } from "./Trial";

const DEFAULT_TRIAL: ITrial = {
	name: "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer",
	country: "FR",
	start_date: "2019-01-01",
	end_date: "2025-08-01",
	sponsor: "Sanofi",
	canceled: false,
	study_type: "interventional",
	primary_purpose: "treatment",
};

describe("Trial model", () => {
	test("a trial that is canceled", () => {
		const trial = {
			...DEFAULT_TRIAL,
			canceled: true,
		};

		expect(new Trial(trial).isCanceled).toBeTruthy();
	});

	test("a trial that is ongoing", () => {
		expect(new Trial(DEFAULT_TRIAL).isOngoing).toBeTruthy();
	});

	test("a trial that is ongoing", () => {
		expect(new Trial(DEFAULT_TRIAL).isOngoing).toBeTruthy();
	});

	it("should check country code", () => {
		const trial = new Trial(DEFAULT_TRIAL);
		expect(trial.hasCountryCode("de")).toBeFalsy();
		expect(trial.hasCountryCode("fr")).toBeTruthy();
	});

	it("should check sponsor", () => {
		const trial = new Trial(DEFAULT_TRIAL);
		expect(trial.belongsToSponsor("test")).toBeFalsy();
		expect(trial.belongsToSponsor("sanofi")).toBeTruthy();
	});
});
