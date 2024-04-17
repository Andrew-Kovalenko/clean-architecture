import React, { useEffect, useState } from 'react'
import { Profile } from 'profiles/application/models/Profile'
import { connect } from 'profiles/ui/connect/connector'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'

const ProfilesList = (props: IProfileContext) => {
    const [profiles, setProfiles] = useState<Profile[]>([])

    useEffect(() => {
        async function getProfiles() {
            const profiles = await props.repository.get();
            console.log('profiles', profiles)
            setProfiles(profiles)
        }

        getProfiles();
    },[props.repository])


    return (
        <div>
            Profiles
            <ul>
                {profiles.map(profile => <li>{profile.name}</li>)}
            </ul>
        </div>
    )
}

export default connect(ProfilesList)
