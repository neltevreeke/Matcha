import React from 'react'
import styled from 'styled-components'
import Button from '../button/button'
import { useFormik } from 'formik'

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

const ErrorBox = styled.div`
    width: auto;
    color: red;
    margin-top: -10px;
    margin-bottom: 16px;
`

const validate = values => {
    const errors = {}

    if (!values.firstName) {
        errors.firstName = 'First name required'
    } else if (values.firstName > 10) {
        errors.firstName = 'Must be 10 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Last name required'
    } else if (values.lastName > 10) {
        errors.lastName = 'Must be 10 characters or less'
    }

    if (!values.email) {
        errors.email = 'Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email'
    }

    if (!values.password) {
        errors.password = 'Password required'
    } else if (values.password < 7) {
        errors.password = 'Must be 7 characters or more'
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = 'Repeated password required'
    } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = 'Passwords do not match'
    }

    return errors
}

const SignupForm = (props) => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validate,
        onSubmit: async values => {
            const res = await fetch('http://localhost:9000/user/signup', {
                method: 'POST',
                body: JSON.stringify(values),
            })
            .then(res => res.text())
            .then(res => console.log(res))
            // .catch(err => err)

            console.log(res)
        },
    })

    return (
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Label htmlFor='firstName'>First name</Label>
            <input 
                name='firstName'
                type='text' 
                placeholder='Theresa' 
                id='registerFirstNameInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <ErrorBox>{formik.errors.firstName}</ErrorBox> : null}

            <Label htmlFor='lastName'>Last name</Label>
            <input 
                name='lastName'
                type='text' 
                placeholder='Williams' 
                id='registerLastNameInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? <ErrorBox>{formik.errors.lastName}</ErrorBox> : null}

            <Label htmlFor='email'>Email</Label>
            <input 
                name='email'
                type='email' 
                placeholder='example@example.com'
                id='registerEmailInput'
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
                id='registerPasswordInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <ErrorBox>{formik.errors.password}</ErrorBox> : null}

            <Label htmlFor='repeatPassword'>Repeat password</Label>
            <input
                name='repeatPassword'
                type='password'
                placeholder='Repeat password'
                id='registerRepeatPasswordInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
            />
            {formik.touched.repeatPassword && formik.errors.repeatPassword ? <ErrorBox>{formik.errors.repeatPassword}</ErrorBox> : null}

            <Button type={'submit'} color={'white'} backgroundColor={'#63D397'}>submit</Button>
        </FormWrapper>
    )
}

export default SignupForm