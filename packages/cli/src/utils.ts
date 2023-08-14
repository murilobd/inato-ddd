import countriesList from "./countries.json";

type TrialDate = `${string}-${string}-${string}`;
type CountryCode = `${string}${string}`;

interface ITrial {
	name: string;
	country: CountryCode;
	start_date: TrialDate;
	end_date: TrialDate;
	sponsor: string;
	canceled: boolean;
	study_type: string;
	primary_purpose: string;
}

export interface ApiResponse {
	message: ITrial[] | [];
}

interface CountryList {
	name: string;
	code: CountryCode;
}

// simulate an API call to get list of countries
async function getListCountries(): Promise<CountryList[]> {
	return Promise.resolve(countriesList);
}

function mapCountryCodeToCountryName(
	countryList: CountryList[],
	countryCode: CountryCode
): string {
	return (
		countryList.find(
			(country) => country.code === countryCode.toUpperCase()
		)?.name || countryCode
	);
}

export async function parseApiResponse(
	apiResponse: ApiResponse
): Promise<string> {
	const countries = await getListCountries();
	const parsedTrials = apiResponse.message.map((trial) => {
		const countryName = mapCountryCodeToCountryName(
			countries,
			trial.country
		);
		return `${trial.name}, ${countryName}`;
	});

	return parsedTrials.join("\n");
}
