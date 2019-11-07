import React, { useState } from 'react'
import styled from 'styled-components'
import HoverMenu from '../hovermenu/hovermenu'
import { Link } from 'react-router-dom'

// TODO: refactor routes

const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${props => props.borderColor};
`

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`

export default ({ borderColor, setView }) => {
  const [isShown, setIsShown] = useState(false)

  const handleAvatarContainerMouseEnter = () => {
    setIsShown(true)
  }

  const handleHoverMenuMouseLeave = () => {
    setIsShown(false)
  }

  const handleLinkSettingsClick = () => {
    setView('settings')
  }

  return (
    <>
      <AvatarContainer
        borderColor={borderColor}
        onMouseEnter={handleAvatarContainerMouseEnter}
      >
        <AvatarImg src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
      </AvatarContainer>
      {isShown && (
        <HoverMenu onMouseLeave={handleHoverMenuMouseLeave}>
          <Link
            to='#'
            onClick={handleLinkSettingsClick}
          >
            settings
          </Link>
          <Link to='/'>
            log out
          </Link>
        </HoverMenu>
      )}
    </>
  )
}
