import axios from 'axios';
import { IProfiles } from 'profiles/application/models/IProfiles'
import { IProfilesRepository } from 'profiles/application/_ports/IProfilesRepository'

export class ProfileRepository implements IProfilesRepository {
    async get(): Promise<IProfiles> {
        const response = await axios.get('https://my-json-server.typicode.com/Andrew-Kovalenko/clean-architecture/profiles')

        console.log('response', response)
        return Promise.resolve(undefined)
    }
}
