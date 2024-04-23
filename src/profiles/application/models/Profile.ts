import { ProfileRole } from 'profiles/application/models/ProfileRole'

export interface Profile {
    id: string,
    name: string,
    role: ProfileRole
}
