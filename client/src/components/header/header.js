import React from 'react'
import styled from 'styled-components'
import Link from '../link/link'
import Headline from '../headline/headline'

const Header = styled.div`
    background-image: url('https://images.unsplash.com/photo-1446814699583-d835df35a267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3149&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    height: 580px;
    display: flex;
    align-items: center;
    padding: 74px, 0px, 0px, 74px;
`

const HeaderContainer = styled.div`
    margin-left: 20%;
    width: 440px;
    height: 100%;
`

export default () => {

    return (
        <>
            <Header>
                <HeaderContainer>
                    <Headline color={'white'} fontSize={'48px'} text={'Your love might be closer than you think...'} />
                    <Link link={'#signup'} buttonBorderColor={'white'} buttonText={'sign up'} color={'white'} />
                </HeaderContainer>
            </Header>
        </>
    )
}