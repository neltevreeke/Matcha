import React from 'react'
import styled from 'styled-components'
import Headline from '../headline/headline'

const HeroItem = styled.div`
    @media only screen and (max-width: 768px) {
        justify-content: stretch;
        width: auto;
    }

    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > i {
        color: #63D397;
        font-size: 84px;
        justify-content: center;
    }

    & > p {
        color: #505050;
        width: 100%;
        margin: 0;
    }
`

export default (props) => {

    return (
        <HeroItem>
            <i className={props.iconClass}></i>
            <Headline text={props.headLineText} color={'#505050'}/>
            <p>{props.text}</p>
        </HeroItem>
    )
}