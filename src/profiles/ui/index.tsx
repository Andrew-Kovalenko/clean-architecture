import React from 'react'
import { ProfileRepository } from 'profiles/repository/get/ProfileRepository'

const Profiles = () => {
    const repository = new ProfileRepository()
    console.log('repository', repository.get())

    return (
        <div>
            Profiles
        </div>
    )
}

export default Profiles
