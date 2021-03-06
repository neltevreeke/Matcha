import React from 'react'
import styled from 'styled-components'
import Button from '../button/button'
import { useFormik } from 'formik'
import axios from 'axios'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    > button {
        align-self: center;
    }

    > input[type=email], input[type=text], input[type=password], input[type=number] {
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

const Select = styled.select`
    height: 41px;
    outline: none;
    color: #505050;
    font-size: 14px;
    border: 2px solid #C4C4C4;
    background-color: white;
    margin-bottom: 16px;
    width: 120px;
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
    } else if (values.password.length < 7) {
        errors.password = 'Must be 7 characters or more'
    }

    if (!values.repeatPassword) {
        errors.repeatPassword = 'Repeated password required'
    } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = 'Passwords do not match'
    }

    if (!values.age) {
        errors.age = 'Age is required'
    }

    if (!values.gender) {
        errors.gender = 'Gender is required'
    }

    return errors
}

const SignupForm = props => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            age: '',
            gender: ''
        },
        validate,
        onSubmit: async (values, { setFieldValue, setStatus }) => {
            axios.post('http://localhost:9000/user/signup', {
                values
            })
            .then(() => {
                props.hide()
            })
            .catch(() => {
                setStatus(values.email + ' already exists')
                setFieldValue('email', '')
            })
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
            {formik.touched.email && formik.status ? <ErrorBox>{formik.status}</ErrorBox> : null}

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

            <Label htmlFor='age'>Age</Label>
            <input
                name='age'
                type='number'
                placeholder='27'
                id='registerAgeInput'
                min='18'
                max='99'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? <ErrorBox>{formik.errors.age}</ErrorBox> : null}

            <Label htmlFor='gender'>Gender</Label>
            <Select 
                as='select' 
                name='gender'
                component='select'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
            >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>
            {formik.touched.gender && formik.errors.gender ? <ErrorBox>{formik.errors.gender}</ErrorBox> : null}

            <Button type={'submit'} color={'white'} backgroundColor={'#63D397'}>submit</Button>
        </FormWrapper>
    )
}

export default SignupForm