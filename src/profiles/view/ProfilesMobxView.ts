import { action, observable } from 'mobx'
import { Profile } from 'profiles/application/models/Profile'
import { ListView } from 'profiles/presetation/ports/ListView'

export class ProfilesMobxView implements ListView<Profile[]>{
    @observable accessor items: Profile[] = []

    @observable accessor isLoading = false

    @action
    setItems(items: Profile[]) {
        this.items = items
    }

    @action
    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading
    }
}
