import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
    background: ${props => props.background}
    border-radius: 3px;
    border: 2px solid ${props => props.borderColor};
    padding: 14px 30px;
    color: ${props => props.color};
    font-weight: bold;
    text-decoration: none;
`

export default (props) => {

    return (
        <Button color={props.color} background={props.background} borderColor={props.borderColor}>
            {props.text}
        </Button>
    )
}