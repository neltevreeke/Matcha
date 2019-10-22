import React from 'react'
import styled from 'styled-components'

const HeroItem = styled.div`
    height: 100px;
    width: 195px;
    background: red;
    display: flex;

    & > i {
        color: #63D397;
        font-size: 84px;
        justify-content: center;
    }
`

export default (props) => {

    return (
        <HeroItem>
            <i className={props.iconClass}></i>
        </HeroItem>
    )
}