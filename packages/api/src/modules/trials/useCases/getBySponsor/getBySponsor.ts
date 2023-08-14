import { getTrials } from "../../../../shared/external-service/api.service";
import { ITrial, Trial } from "../../domain/Trial";

export class GetBySponsor {
	public async execute(sponsor: string): Promise<ITrial[] | []> {
		try {
			const trials = await getTrials();
			return trials.data.filter((trial) => {
				const _trial = new Trial(trial);
				return _trial.isOngoing && _trial.belongsToSponsor(sponsor);
			});
		} catch (error) {
			throw error;
		}
	}
}
