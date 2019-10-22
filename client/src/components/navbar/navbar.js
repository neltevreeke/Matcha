import React from 'react'
import styled from 'styled-components'
import Headline from '../headline/headline'
import Link from '../link/link'

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
                <Link link={'#login'} buttonText={'log in'} buttonBorderColor={'none'} />
                <Link link={'#signup'} buttonText={'sign up'} buttonBorderColor={'white'} />
            </NavbarItems>
        </Navbar>
    )
}