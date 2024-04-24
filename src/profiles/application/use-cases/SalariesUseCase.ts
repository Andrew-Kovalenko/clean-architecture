import { ProfileRole } from 'profiles/application/models/ProfileRole'
import { SalaryInfo } from 'profiles/application/models/SalaryInfo'
import { ProfilesRepository } from 'profiles/application/_ports/ProfilesRepository'
import { JobStatisticRepository } from 'profiles/application/_ports/JobStatisticRepository'

const hourRateByRole: Record<ProfileRole, number> = {
    [ProfileRole.JUNIOR]: 100,
    [ProfileRole.MIDDLE]: 500,
    [ProfileRole.SENIOR]: 1000,
}

export class SalariesUseCase {
    constructor(
        private restProfileRepository: ProfilesRepository,
        private restJobStatisticRepository: JobStatisticRepository,
    ) {}

    async calculateSalaries(): Promise<SalaryInfo[]> {
        const statistics = await this.restJobStatisticRepository.get()
        const profiles = await this.restProfileRepository.get()

        const salaryInfo: SalaryInfo[] = profiles.map(profile => {
            const profileStatistic = statistics?.find(it => it.profileId === profile.id)
            if (!profileStatistic) {
                console.log('error, profileStatistic - ', profileStatistic)
                return
            }

            return {
                profileId: profile.id,
                amount: hourRateByRole[profile.role] * profileStatistic.workedHoursAmount * profileStatistic.averageEfficient
                    - (profileStatistic.usedPaidVacationAmount * 30)
            }
        })


        return salaryInfo
    }
}
