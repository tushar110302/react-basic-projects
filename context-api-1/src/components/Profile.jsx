import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

  return (
    <div>
        {!user ? <div>Please Login</div> : <div>User: {user.username}</div>}
    </div>
  )
}

export default Profile