import { ValueObject } from "../../../shared/domain/ValueObject";
import { normalizeString } from "../../../shared/utils/normalizeString";

type TrialDate = `${string}-${string}-${string}`;
type CountryCode = `${string}${string}`;

export interface ITrial {
	name: string;
	country: CountryCode;
	start_date: TrialDate;
	end_date: TrialDate;
	sponsor: string;
	canceled: boolean;
	study_type: string;
	primary_purpose: string;
}

/**
 * Considering Trial as a ValueObject because it can't be changed, as in this demo, the value of it comes from an API response
 */
export class Trial extends ValueObject<ITrial> {
	/**
	 * A trial is ongoing if:
	 *  -its start date is in the past
	 *  - its end date is in the future
	 *  -it has not been canceled
	 */
	get isOngoing(): boolean {
		const start_date = new Date(this.props.start_date);
		const end_date = new Date(this.props.end_date);
		const today = new Date();

		return today >= start_date && today < end_date && !this.isCanceled;
	}

	get isCanceled(): boolean {
		return this.props.canceled;
	}

	public hasCountryCode(countryCode: CountryCode): boolean {
		return (
			normalizeString(countryCode) === normalizeString(this.props.country)
		);
	}

	public belongsToSponsor(sponsor: string): boolean {
		return normalizeString(sponsor) === normalizeString(this.props.sponsor);
	}
}
