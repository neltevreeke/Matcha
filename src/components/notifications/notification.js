import React, {Component} from 'react'
import styled from 'styled-components'
import ee from 'EventEmitter'


// DOC:

// import notify in file.
// use on an event and call notify function with a message.
// onClick={() => notify('hallo mijn naam is je boi')}


const Container = styled.div`
    background: linear-gradient(45deg, #f2be82 0%,#eda753 10%,#ff5656 100%);
    border-radius: 3px;
    color: white;
    padding: 16px;
    position: fixed;
    right: ${props => props.right}px;
    top: 16px;
    z-index: 999;
    transition: right 0.5s ease;
    font-weight: 500;

    > i {
        margin-left: 10px;
    }
`;

const emitter = new ee();

export const notify = (message) => {
    emitter.emit('notification', message)
}

export default class Notification extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            right: -200,
            message: ''
        }

        this.timeout = null;

        emitter.on('notification', (message) => {
            this.onShow(message)
        })
    }

    onShow = (message) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState({
                right: -200
            }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(message);
                }, 500)
            })
        } else {
            this.showNotification(message);
        }
    }

    showNotification = (message) => {
        this.setState({
            right: 16,
            message
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    right: -200
                })
            }, 3000)
        })
    }

    render() {
        return (
            <Container right={this.state.right}>
                {this.state.message}<i className='fa fa-bell'></i>
            </Container>
        )
    }
}
