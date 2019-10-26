import React from 'react'
import styled from 'styled-components'
import Headline from '../headline/headline'
import Button from '../button/button'
import ToggleContent from '../modal/togglecontent'
import Modal from '../modal/modalwrap'
import Form from '../form/form'

const Navbar = styled.div`
    display: flex;
    height: 80px;
    background-color: #63D397;
    align-items: center;
    padding: 0px 32px 0px 32px;
`

const NavbarItems = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`

export default () => {

    return (
        <Navbar>
            <Headline fontSize={'24px'} text={'Matcha'} color={'white'} />
            <NavbarItems>
            <ToggleContent 
                    toggle={show => <Button onClick={show} color={'white'} border={false}>log in</Button>}
                    content={hide => (
                        <Modal title='log in' hide={hide}>
                            <Form>
                            </Form>
                        </Modal>
                    )}
                />

                <ToggleContent 
                    toggle={show => <Button onClick={show} color={'white'} border={true}>sign up</Button>}
                    content={hide => (
                        <Modal title='sign up' hide={hide}>
                            <p>modal sign up content</p>
                        </Modal>
                    )}
                />
            </NavbarItems>
        </Navbar>
    )
}