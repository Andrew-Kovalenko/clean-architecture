import { RestProfileRepository } from 'profiles/repository/RestProfileRepository'
import { ProfilesView } from 'profiles/presetation/ports/ProfilesView'

export class GetProfilesPresenter {
    constructor(
        private profileRepository: RestProfileRepository,
        private profileView: ProfilesView
    ) {}

    async get() {
        this.profileView.setIsLoading(true)

        try {
            const awaitTimeout = (delay: number) =>
                new Promise(resolve => setTimeout(resolve, delay));

            await awaitTimeout(2000).then(() => console.log('Hi'));

            const response = await this.profileRepository.get()

            this.profileView.setProfiles(response)
        } catch (error) {
            console.log('error', error)
        } finally {
            this.profileView.setIsLoading(false)
        }
    }
}
