import { ProfilesRepository } from 'profiles/application/_ports/ProfilesRepository'
import { ProfilesMobxView } from 'profiles/view/ProfilesMobxView'
import { GetProfilesPresenter } from 'profiles/presetation/presenters/GetProfilesPresenter'

export interface IProfileContext {
   repository: ProfilesRepository;

   profilesPresenter: GetProfilesPresenter

   profilesView: ProfilesMobxView;
}
