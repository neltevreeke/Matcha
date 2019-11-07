import Formik from 'formik'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../button/button'
import getMe from '../../utils/getme'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    width: 25%;
    box-sizing: border-box;

    > button {
        align-self: left;
        width: 120px;
    }

    > input[type=email], input[type=text], input[type=password], input[type=number] {
        border: 2px solid #C4C4C4;
        border-radius: 3px;
        outline: none;
        margin-bottom: 16px;
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

export default () => {
    const [userInfo, setUserInfo] = useState();
    // useEffect(() => {
 
    // }, []);

    const fetchUserData = async () => {
        setUserInfo(await getMe());
    }

    fetchUserData();

    // const userInfo = await getMe()

    console.log(userInfo)

    return (
        <FormWrapper>
            <Label>First Name</Label>
            <input 
                name='firstName'
                type='text' 
                // placeholder='Theresa' 
                id='updateFirstNameInput'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firstName}
            />

            <Label>Last Name</Label>
            <input 
                name='lastName'
                type='text' 
                // placeholder='Theresa' 
                id='updateLastNameInput'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.lastName}
            />

            <Label>Email</Label>
            <input 
                name='email'
                type='email' 
                // placeholder='Theresa' 
                id='updateEmailInput'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
            />

            <Label>Age</Label>
            <input
                name='age'
                type='number'
                // placeholder='27'
                id='updateAgeInput'
                min='18'
                max='99'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.age}
            />

            <Label>Gender</Label>
            <Select name='gender' form='name of form'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>

            <Label>Phonenumber</Label>
            <input
                name='phonenumber'
                type='number'
                // placeholder='27'
                id='updatePhonenumberInput'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.age}
            />

            <Button type={'submit'} color={'white'} backgroundColor={'#63D397'}>update</Button>
        </FormWrapper>
    )
}