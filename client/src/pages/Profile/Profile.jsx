import React from 'react'
import { ProfileData } from '../../data/ProfileData'

const Profile = () => {

  // TODO: Add profile fetch, add into state....
  // TODO: Add CRUD stuff for profile

  return (
    <div className="flex-1 items-center gap-x-12 px-10">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      <div>
        {ProfileData.map((profile, index) => (
              <div key={index}>
                <h1>{profile.name}</h1>
                <p>Major: {profile.major}</p>
                <p>Interests: {profile.interests}</p>
                <p>About: {profile.about}</p>
              </div>
            ))}
      </div>

      {/* TODO: Addd a grid of posts */}
      

    </div>
  )
}

export default Profile