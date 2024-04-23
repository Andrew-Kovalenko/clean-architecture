import { ProfilesRepository } from 'profiles/application/_ports/ProfilesRepository'
import { ProfilesMobxView } from 'profiles/view/ProfilesMobxView'
import { GetProfilesPresenter } from 'profiles/presetation/presenters/GetProfilesPresenter'
import { CalculateSalariesPresenter } from 'profiles/presetation/presenters/CalculateSalariesPresenter'

export interface IProfileContext {
   repository: ProfilesRepository;

   profilesPresenter: GetProfilesPresenter
   calculateSalariesPresenter: CalculateSalariesPresenter

   profilesView: ProfilesMobxView;
}
