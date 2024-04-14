import React, { useEffect, useState } from 'react'
import { RestProfileRepository } from 'profiles/repository/get/RestProfileRepository'
import { Profile } from 'profiles/application/models/Profile'

const Profiles = () => {
    const repository = new RestProfileRepository()

    const [profiles, setProfiles] = useState<Profile[]>([])

    useEffect(() => {
        async function getProfiles() {
            const profiles = await repository.get()

            setProfiles(profiles)
        }

        getProfiles();
    },[])


    return (
        <div>
            Profiles
            <ul>
                {profiles.map(profile => <li>{profile.name}</li>)}
            </ul>
        </div>
    )
}

export default Profiles
