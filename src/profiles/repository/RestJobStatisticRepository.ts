import { JobStatisticRepository } from 'profiles/application/_ports/JobStatisticRepository'
import { MockJobStatisticAPI } from 'mock-api/MockJobStatisticAPI'
import { JobStatistic } from 'profiles/application/models/JobStatistic'

export class RestJobStatisticRepository implements JobStatisticRepository {
    constructor(
        private mockJobStatisticAPI: MockJobStatisticAPI
    ) {}

    async get(): Promise<JobStatistic[]> {
        return this.mockJobStatisticAPI.getJobStatistic()
    }
}
