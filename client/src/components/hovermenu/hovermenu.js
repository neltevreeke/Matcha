import React from 'react'
import styled from 'styled-components'

const HoverMenu = styled.div`
    height: auto;
    max-width: 82px;
    background: #E5E5E5;
    top: 80px;
    right: 0px;
    margin-right: 32px;
    margin-top: 16px;
    position: absolute;
    padding: 0px 16px;
    border-radius: 3px;
    color: #505050;
    display: flex;
    flex-direction: column;
    align-items: center;

    > a {
        text-decoration: none;
        color: #505050;
        padding: 16px;
        width: 100%;
    }

    > a:hover {
        background-color: #63D397;
        color: white;
    }

    > a:first-child:hover {
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }

    > a:last-child:hover {
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
`

export default ({children, hide}) => {

    return (
        <HoverMenu onMouseLeave={
            hide
        }>
            {children}
        </HoverMenu>
    )
}