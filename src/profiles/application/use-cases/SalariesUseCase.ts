import { RestJobStatisticRepository } from 'profiles/repository/RestJobStatisticRepository'
import { ProfileRole } from 'profiles/application/models/ProfileRole'
import { RestProfileRepository } from 'profiles/repository/RestProfileRepository'
import { SalaryInfo } from 'profiles/application/models/SalaryInfo'

const hourRateByRole: Record<ProfileRole, number> = {
    [ProfileRole.JUNIOR]: 100,
    [ProfileRole.MIDDLE]: 500,
    [ProfileRole.SENIOR]: 1000,
}

export class SalariesUseCase {
    constructor(
        private restProfileRepository: RestProfileRepository,
        private restJobStatisticRepository: RestJobStatisticRepository,
    ) {}

    async calculateSalaries(): Promise<SalaryInfo[]> {
        const statistics = await this.restJobStatisticRepository.get()
        const profiles = await this.restProfileRepository.get()
        console.log('statistics', statistics)
        console.log('profiles', profiles)


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
