import { Bean, ClawjectApplication, ExposeBeans } from '@clawject/di'
import { RestProfileRepository } from 'profiles/repository/RestProfileRepository'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'
import { ProfilesMobxView } from 'profiles/view/ProfilesMobxView'
import { GetProfilesPresenter } from 'profiles/presetation/presenters/GetProfilesPresenter'
import { MockProfilesAPI } from 'mock-api/MockProfilesAPI'
import { MockJobStatisticAPI } from 'mock-api/MockJobStatisticAPI'
import { RestJobStatisticRepository } from 'profiles/repository/RestJobStatisticRepository'


@ClawjectApplication()
export class ProfileContext {
    mockProfilesAPI = Bean(MockProfilesAPI)
    mockJobStatisticAPI = Bean(MockJobStatisticAPI)

    restProfileRepository = Bean(RestProfileRepository)
    restJobStatisticRepository = Bean(RestJobStatisticRepository)

    getProfilesPresenter = Bean(GetProfilesPresenter)

    profilesView = Bean(ProfilesMobxView)

    exposed = ExposeBeans<IProfileContext>()
}
