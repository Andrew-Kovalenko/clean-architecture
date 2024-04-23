import { JobStatistic } from 'profiles/application/models/JobStatistic'

export interface JobStatisticRepository {
    get(): Promise<JobStatistic[]>
}
