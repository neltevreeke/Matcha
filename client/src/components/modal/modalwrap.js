import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Headline from '../headline/headline'

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000000a8;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 10;
`

const Modal = styled.div`
    position: relative;
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
        font-size: 24px;
    }
`

const ModalHeadline = styled(Headline)`
    position: absolute;
    margin: 0;
`

const ModalContent = styled.div`
    padding: 24px;
`

const ModalWrap = ({title, hide, children}) => {

    return ReactDOM.createPortal(
        <ModalContainer>
            <Modal>
                <ModalHeader>
                    <ModalHeadline color={'white'} text={title} />
                    <i onClick={hide} className='fa fa-times'></i>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
            </Modal>
        </ModalContainer>,
        document.getElementById('modal-root')
    )
}

export default ModalWrap