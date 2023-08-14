import { getTrials } from "../../../../shared/external-service/api.service";
import { ITrial, Trial } from "../../domain/Trial";

export class GetByCountryCode {
	public async execute(countryCode: string): Promise<ITrial[] | []> {
		try {
			const trials = await getTrials();
			return trials.data.filter((trial) => {
				const _trial = new Trial(trial);
				return _trial.isOngoing && _trial.hasCountryCode(countryCode);
			});
		} catch (error) {
			throw error;
		}
	}
}
