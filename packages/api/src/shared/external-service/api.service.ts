import { ITrial } from "../../modules/trials/domain/Trial";

type TrialService = {
	data: ITrial[];
	meta: {
		page: number;
		total: number;
		next: number | null;
	};
};

async function getTrials(): Promise<TrialService> {
	const trials: ITrial[] = [
		{
			name: "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer",
			country: "FR",
			start_date: "2019-01-01",
			end_date: "2025-08-01",
			sponsor: "Sanofi",
			canceled: false,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
		{
			name: "Topical Calcipotriene Treatment for Breast Cancer Immunoprevention",
			country: "fr",
			start_date: "2018-03-20",
			end_date: "2032-09-10",
			sponsor: "Sanofi",
			canceled: false,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
		{
			name: "Carboplatin +/- Nivolumab in Metastatic Triple Negative Breast Cancer",
			country: "ES",
			start_date: "2018-06-13",
			end_date: "2023-07-17",
			sponsor: "Sanofi",
			canceled: true,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
		{
			name: "Supine MRI in Breast Cancer Patients Receiving Neoadjuvant Therapy",
			country: "IT",
			start_date: "2022-06-15",
			end_date: "2030-12-24",
			sponsor: "AstraZeneca",
			canceled: false,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
		{
			name: "Neratinib +/- Fulvestrant in HER2+, ER+ Metastatic Breast Cancer",
			country: "DE",
			start_date: "2016-03-08",
			end_date: "2026-10-10",
			sponsor: "AstraZeneca",
			canceled: false,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
		{
			name: "Atezolizumab + Stereotactic Radiation in Triple-negative Breast Cancer and Brain Metastasis",
			country: "AT",
			start_date: "2019-02-26",
			end_date: "2025-05-05",
			sponsor: "AstraZeneca",
			canceled: true,
			study_type: "interventional",
			primary_purpose: "treatment",
		},
	];

	// simulate a response from API that includes a meta with pagination information
	return Promise.resolve({
		data: trials,
		meta: {
			page: 1,
			total: 1,
			next: null,
		},
	});
}

export { getTrials };
