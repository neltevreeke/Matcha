import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Headline from '../headline/headline'

const Modal = styled.div`
    position: fixed;
    top: 300px;
    background-color: white;
    border-radius: 3px;
    width: 384px;
`

const ModalHeader = styled.div`
    background-color: #63D397;
    height: 60px;
    display: flex;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
    justify-content: center;

    > i {
        margin-left: auto;
        color: white;
        cursor: pointer;
    }
`

const ModalContent = styled.div`
    padding: 24px;
`

const ModalWrap = ({title, hide, children}) => {

    return ReactDOM.createPortal(
        <Modal>
            <ModalHeader>
                <Headline color={'white'} text={title} />
                <i onClick={hide} className='fa fa-times'></i>
            </ModalHeader>
            <ModalContent>
                {children}
            </ModalContent>
        </Modal>,
        document.getElementById('modal-root')
    )
}

export default ModalWrap