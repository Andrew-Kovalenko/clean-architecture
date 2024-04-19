import { Bean, ClawjectApplication, ExposeBeans } from '@clawject/di'
import { RestProfileRepository } from 'profiles/repository/get/RestProfileRepository'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'
import { ProfilesMobxView } from 'profiles/view/ProfilesMobxView'
import { GetProfilesPresenter } from 'profiles/presetation/presenters/GetProfilesPresenter'


@ClawjectApplication()
export class ProfileContext {
    restProfileRepository = Bean(RestProfileRepository)

    getProfilesPresenter = Bean(GetProfilesPresenter)

    profilesView = Bean(ProfilesMobxView)

    exposed = ExposeBeans<IProfileContext>()
}
