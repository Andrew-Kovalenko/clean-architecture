import { Bean, ClawjectApplication, ExposeBeans } from '@clawject/di'
import { RestProfileRepository } from 'profiles/repository/RestProfileRepository'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'
import { ProfilesMobxView } from 'profiles/view/ProfilesMobxView'
import { GetProfilesPresenter } from 'profiles/presetation/presenters/GetProfilesPresenter'
import { MockProfilesAPI } from 'mock-api/MockProfilesAPI'
import { MockJobStatisticAPI } from 'mock-api/MockJobStatisticAPI'
import { RestJobStatisticRepository } from 'profiles/repository/RestJobStatisticRepository'
import { SalariesUseCase } from 'profiles/application/use-cases/SalariesUseCase'
import { CalculateSalariesPresenter } from 'profiles/presetation/presenters/CalculateSalariesPresenter'


@ClawjectApplication()
export class ProfileContext {
    mockProfilesAPI = Bean(MockProfilesAPI)
    mockJobStatisticAPI = Bean(MockJobStatisticAPI)

    restProfileRepository = Bean(RestProfileRepository)
    restJobStatisticRepository = Bean(RestJobStatisticRepository)

    salariesUseCase = Bean(SalariesUseCase)

    getProfilesPresenter = Bean(GetProfilesPresenter)
    calculateSalariesPresenter = Bean(CalculateSalariesPresenter)

    profilesView = Bean(ProfilesMobxView)

    exposed = ExposeBeans<IProfileContext>()
}
