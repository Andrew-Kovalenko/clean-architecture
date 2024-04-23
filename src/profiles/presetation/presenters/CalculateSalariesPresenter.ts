import { SalariesUseCase } from 'profiles/application/use-cases/SalariesUseCase'
import { ProfilesView } from 'profiles/presetation/ports/ProfilesView'

export class CalculateSalariesPresenter {
    constructor(
       private salariesUseCase: SalariesUseCase,
       private profilesView: ProfilesView
    ) {}

    async calculate() : Promise<void> {
        const salaries = await this.salariesUseCase.calculateSalaries()

        this.profilesView.setSalaries(salaries)
    }
}
