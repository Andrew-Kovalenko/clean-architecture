import { Profile } from 'profiles/application/models/Profile'

export interface ProfilesRepository {
    get(): Promise<Profile[]>
    create(profile: Profile): Promise<void>
}
