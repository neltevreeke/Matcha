import React from 'react'
import styled from 'styled-components'

const Headline = styled.h2`
    color: ${props => props.color};
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: ${props => props.fontSize};
`

export default (props) => {

    return (
        <Headline fontSize={props.fontSize} color={props.color}>
            {props.text}
        </Headline>
    )
}