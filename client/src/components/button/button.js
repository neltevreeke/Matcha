import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
    border-radius: 3px;
    border: ${props => props.border ? '2px solid white' : 'none'};
    padding: 14px 30px;
    color: ${props => props.color};
    font-weight: bold;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    text-transform: lowercase;
`

export default Button
