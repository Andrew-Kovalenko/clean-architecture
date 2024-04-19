import React, { useEffect } from 'react'
import { connect } from 'profiles/ui/connect/connector'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'

const ProfilesList = (props: IProfileContext) => {
    useEffect(() => {
        props.profilesPresenter.get()

    },[props.repository])

    if (props.profilesView.isLoading) {
        return <h2>LOADING</h2>
    }

    return (
        <div>
            Profiles
            <ul>
                {props.profilesView.items.map(profile => (
                    <li key={profile.id}>{profile.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(ProfilesList)
