import React from 'react'
import Button from '../button/button'
import styled from 'styled-components'
import { useFormik } from 'formik'
import axios from 'axios'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    > button {
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

const ErrorBox = styled.div`
    width: auto;
    color: red;
    margin-top: -10px;
    margin-bottom: 16px;
`

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email'
    }

    if (!values.password) {
        errors.password = 'Password required'
    }

    return errors
}

const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            axios.post('http://localhost:9000/user/login', {
                values
            })
            .then(res => res.json())
            .then(res => console.log(res))
        },
    })

    return (
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Label htmlFor='email'>Email</Label>
            <input
                name='email'
                type='email' 
                placeholder='example@example.com'
                id='loginEmailInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <ErrorBox>{formik.errors.email}</ErrorBox> : null}

            <Label htmlFor='password'>Password</Label>
            <input 
                name='password'
                type='password' 
                placeholder='password'
                id='loginPasswordInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <ErrorBox>{formik.errors.password}</ErrorBox> : null}

            <Button type={'submit'} color={'white'} backgroundColor={'#63D397'}>submit</Button>
        </FormWrapper>
    )
}

export default LoginForm