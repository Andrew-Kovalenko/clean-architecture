import React, { useEffect } from 'react'
import { connect } from 'profiles/ui/connect/connector'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'

const ProfilesList = ({
    profilesPresenter,
    calculateSalariesPresenter,
    profilesView,
}: IProfileContext) => {
    useEffect(() => {
        profilesPresenter.get()
    }, [])

    if (profilesView.isLoading) {
        return <h2>LOADING</h2>
    }

    return (
        <div>
            Profiles
            <ul>
                {profilesView.profiles.map(profile => {
                    const salary = profilesView.salaries.find(it.profileId === profile.id)

                    return (
                        <li key={profile.id}>
                            {profile.name}
                            {salary && <h4>salary: </h4>}
                        </li>
                    )
                })}
            </ul>
            <button onClick={calculateSalariesPresenter.calculate}>
                Calculate salaries
            </button>
        </div>
    )
}

export default connect(ProfilesList)
