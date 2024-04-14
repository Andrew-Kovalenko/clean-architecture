import axios from 'axios';
import { Profile } from 'profiles/application/models/Profile'
import { ProfilesRepository } from 'profiles/application/_ports/ProfilesRepository'

const baseUrl = 'https://my-json-server.typicode.com/Andrew-Kovalenko/clean-architecture'

export class RestProfileRepository implements ProfilesRepository {
    async get(): Promise<Profile[]> {
        const response = axios.get<Profile[]>(`${baseUrl}/profiles`)
            .then(response => response.data)

        return response;
    }

    async create(profile: Profile): Promise<void> {
       return await axios.post(`${baseUrl}/profiles`, profile)
    }
}
