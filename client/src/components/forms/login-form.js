import React from 'react'
import Button from '../button/button'
import styled from 'styled-components'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    > button {
        width: 40%;
        align-self: center;
    }

    > input[type=email], input[type=text], input[type=password] {
        border: 2px solid #C4C4C4;
        border-radius: 3px;
        outline: none;
        margin-bottom: 16px;
        width: 90%;
        padding: 12px 16px 12px 16px;
        color: #505050;
        font-size: 14px;
    }

    > input:focus {
        border: 2px solid #63D397;
        transition: ease-in 0.2s;
    }
`

const Label = styled.label`
    color: #505050;
    font-size: 14px;
    width: 100%;
    margin-bottom: 8px;
`

const LoginForm = (props) => {

    return (
        <FormWrapper>
            <Label>Email</Label>
            <input type='email' placeholder='example@example.com' />
            <Label>Password</Label>
            <input type='password' placeholder='password' />

            <Button type={'submit'} color={'white'} backgroundColor={'#63D397'}>submit</Button>
        </FormWrapper>
    )
}

export default LoginForm