import { IProfiles } from 'profiles/application/models/IProfiles'

export interface IProfilesRepository {
    get(): Promise<IProfiles>
}
