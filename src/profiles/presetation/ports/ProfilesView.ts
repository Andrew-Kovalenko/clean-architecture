import { Profile } from 'profiles/application/models/Profile'
import { SalaryInfo } from 'profiles/application/models/SalaryInfo'

export interface ProfilesView {
    setSalaries(salaries: SalaryInfo[]): void
    setProfiles(profiles: Profile[]): void
    setIsLoading(isLoading: boolean): void
}
