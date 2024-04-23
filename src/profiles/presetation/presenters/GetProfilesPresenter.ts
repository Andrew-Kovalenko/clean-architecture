import { RestProfileRepository } from 'profiles/repository/RestProfileRepository'
import { ListView } from 'profiles/presetation/ports/ListView'
import { Profile } from 'profiles/application/models/Profile'

export class GetProfilesPresenter {
    constructor(
        private profileRepository: RestProfileRepository,
        private profileView: ListView<Profile[]>
    ) {}

    async get() {
        this.profileView.setIsLoading(true)

        try {
            const awaitTimeout = (delay: number) =>
                new Promise(resolve => setTimeout(resolve, delay));

            await awaitTimeout(2000).then(() => console.log('Hi'));

            const response = await this.profileRepository.get()

            this.profileView.setItems(response)
        } catch (error) {
            console.log('error', error)
        } finally {
            this.profileView.setIsLoading(false)
        }
    }
}
