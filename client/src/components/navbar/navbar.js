import React from 'react'
import styled from 'styled-components'
import Headline from '../headline/headline'

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

export default ({ children }) => {

    return (
        <Navbar>
            <Headline fontSize={'24px'} text={'Matcha'} color={'white'} />
            <NavbarItems>
                {children}
            </NavbarItems>
        </Navbar>
    )
}