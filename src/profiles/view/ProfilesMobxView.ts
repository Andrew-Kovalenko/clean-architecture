import { action, observable } from 'mobx'
import { Profile } from 'profiles/application/models/Profile'
import { ProfilesView } from 'profiles/presetation/ports/ProfilesView'
import { SalaryInfo } from 'profiles/application/models/SalaryInfo'

export class ProfilesMobxView implements ProfilesView {
    @observable accessor profiles: Profile[] = []

    @observable accessor salaries: SalaryInfo[] = []

    @observable accessor isLoading = false

    @action
    setProfiles(items: Profile[]) {
        this.profiles = items
    }

    @action
    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading
    }

    @action
    setSalaries(salaries: SalaryInfo[]) {
       this.salaries = salaries
    }
}
