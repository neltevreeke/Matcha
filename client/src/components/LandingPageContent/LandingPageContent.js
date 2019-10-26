import styled from 'styled-components'
import React from 'react'
import HeroItem from '../hero-item/hero-item'

const LandingPageContent = styled.div`
    @media only screen and (max-width: 768px) {
        width: auto;
        flex-direction: column;
    }

    width: 75%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    padding: 60px 12px 60px 12px;
`

export default () => {
    const textPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vestibulum, aliquam dolor sed, venenatis libero.'

    return (
        <LandingPageContent>
            <HeroItem iconClass={'fa fa-search'} headLineText={'search'} text={textPlaceholder} />
            <HeroItem iconClass={'fa fa-crosshairs'} headLineText={'match'} text={textPlaceholder} />
            <HeroItem iconClass={'fa fa-comments'} headLineText={'connect'} text={textPlaceholder}/>
        </LandingPageContent>
    )
}