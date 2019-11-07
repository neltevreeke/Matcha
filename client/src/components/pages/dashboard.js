import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Button from '../button/button'
import Avatar from '../avatar/avatar'
import UserSettings from '../usersettings/usersettings'

export default () => {
    const [view, setView] = useState('search')

    return (
        <>
            <Navbar>
                <Button onClick={() => {setView('search')}} color={'white'}>search</Button>
                <Button onClick={() => {setView('connections')}} color={'white'}>connections</Button>
                <Button onClick={() => {setView('notifications')}} color={'white'}>notifications</Button>
                <Avatar setView={setView} borderColor={'white'} />
            </Navbar>
            {view === 'settings' && <UserSettings />}
            {view === 'connections' && <div>connections</div>}
            {view === 'search' && <div>search</div>}
            {view === 'notifications' && <div>notifications</div>}
        </>
    )
}