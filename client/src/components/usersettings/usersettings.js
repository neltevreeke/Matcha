import React, { useState } from 'react'
import styled from 'styled-components'
import UserSettingsMenu from '../usersettingsmenu/usersettingsmenu'
import UserDetails from '../usersettingscontent/userdetails'

const UserSettings = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding-top: 32px;
    padding-bottom: 32px;
`

export default () => {
  const [active, setActive] = useState('user details')

  return (
    <>
      <UserSettings>
        <UserSettingsMenu setActive={setActive} />
        {active === 'user details' && <UserDetails />}
        {active === 'pictures' && <div>pictures</div>}
        {active === 'interest tags' && <div>interest tags</div>}
        {active === 'search filters' && <div>search filters</div>}
        {active === 'location' && <div>location</div>}
        {active === 'email notifications' && <div>email notifications</div>}
      </UserSettings>
    </>
  )
}
