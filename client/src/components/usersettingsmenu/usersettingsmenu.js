import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const Menu = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #63D397;
`

const MenuItem = styled.div`
    max-width: 100%;
    background: white;
    height: 62px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    color: #505050;
    text-transform: lowercase;

    > i {
        margin-right: 32px;
        font-size: 25px;
        width: 30px;
    }

    :hover {
        background: #E5E5E5;
        cursor: pointer;
    }
`

export default ({ setActive }) => {
    return (
        <Menu>
            <MenuItem onClick={() => {setActive('user details')}}>
                {/* <Link to={'/dashboard/profile/details'}> */}
                    <i className={'fa fa-user'}></i>
                    user details
                {/* </Link> */}
            </MenuItem>
            <MenuItem onClick={() => {setActive('pictures')}}>
                {/* <Link to={'/dashboard/profile/pictures'}> */}
                    <i className={"fa fa-image"}></i>
                    pictures
                {/* </Link> */}
            </MenuItem>
            <MenuItem onClick={() => {setActive('interest tags')}}>
                <i className={"fa fa-hashtag"}></i>
                interest tags
            </MenuItem>
            <MenuItem onClick={() => {setActive('search filters')}}>
                <i className={"fa fa-filter"}></i>
                search filters
            </MenuItem>
            <MenuItem onClick={() => {setActive('location')}}>
                <i className={"fa fa-map"}></i>
                location
            </MenuItem>
            <MenuItem onClick={() => {setActive('email notifications')}}>
                <i className={"fa fa-bell"}></i>
                email notifications
            </MenuItem>
        </Menu>
    )
}