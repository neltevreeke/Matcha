import React from 'react'
import styled from 'styled-components'

const Headline = styled.h2`
    color: ${props => props.color};
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    text-transform: lowercase;
`

export default ({fontSize, color, text, ...props}) => {

    return (
        <Headline fontSize={fontSize} color={color} {...props}>
            {text}
        </Headline>
    )
}