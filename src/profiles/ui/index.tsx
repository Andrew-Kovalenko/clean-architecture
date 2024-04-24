import React, { useEffect } from 'react'
import { connect } from 'profiles/ui/connect/connector'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'
import './styles.css'

const ProfilesList = ({
    profilesPresenter,
    calculateSalariesPresenter,
    profilesView,
}: IProfileContext) => {
    useEffect(() => {
        profilesPresenter.get()
    }, [])

    if (profilesView.isLoading) {
        return <h2>---LOADING---</h2>
    }

    return (
        <div>
            <h3>EMPLOYEES</h3>
            <table>
                <thead>
                <tr>
                    <th>
                        Profiles
                    </th>
                    <th>
                        Salaries
                    </th>
                </tr>
                </thead>
                <tbody>
                {profilesView.profiles.map(profile => {
                    const salary = profilesView.getSalaryByProfile(profile.id)

                    return (
                        <tr key={profile.id}>
                            <td>{profile.name}</td>
                            <td>{`${salary}`}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button onClick={calculateSalariesPresenter.calculate}>
                Calculate salaries
            </button>
        </div>
    )
}

export default connect(ProfilesList)
