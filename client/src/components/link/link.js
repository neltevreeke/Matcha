import React from 'react'
import styled from 'styled-components'
import Button from '../button/button'

const Link = styled.a`
    text-decoration: none;
`;

export default (props) => {

    return (
        <div style={{display: 'flex'}}>
            <Link href={props.link}>
                <Button text={props.buttonText} color={'white'} background={'transparant'} borderColor={props.buttonBorderColor} />
            </Link>
        </div>
    )
}

        