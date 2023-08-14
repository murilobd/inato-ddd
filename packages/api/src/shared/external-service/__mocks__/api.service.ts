const trials = [
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
	{
		name: "invalid",
		country: "FR",
		start_date: "2019-01-01",
		end_date: "2025-08-01",
		sponsor: "Sanofi",
		canceled: true,
		study_type: "interventional",
		primary_purpose: "treatment",
	},
];
async function getTrials() {
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
