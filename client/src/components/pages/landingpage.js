import React from 'react'
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import LandingPageContent from '../LandingPageContent/LandingPageContent'
import Button from '../button/button'
import ToggleContent from '../modal/togglecontent'
import Modal from '../modal/modalwrap'
import LoginForm from '../forms/login-form'
import SignupForm from '../forms/signup-form'


export default () => {
    return (
        <>
            <Navbar>
                <ToggleContent
                    toggle={show => <Button onClick={show} color={'white'} border={false}>log in</Button>}
                    content={hide => (
                        <Modal title='log in' hide={hide}>
                            <LoginForm hide={hide} />
                        </Modal>
                    )}
                />

                <ToggleContent 
                    toggle={show => <Button onClick={show} color={'white'} border={true}>sign up</Button>}
                    content={hide => (
                        <Modal title='sign up' hide={hide}>
                            <SignupForm hide={hide} />
                        </Modal>
                    )}
                />
            </Navbar>
            <Header />
            <LandingPageContent />
        </>
    )
}