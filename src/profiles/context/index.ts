import { Bean, ClawjectApplication, ExposeBeans } from '@clawject/di'
import { RestProfileRepository } from 'profiles/repository/get/RestProfileRepository'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'


@ClawjectApplication()
export class ProfileApplication  {
    restProfileRepository = Bean(RestProfileRepository)

    exposed = ExposeBeans<IProfileContext>()
}
