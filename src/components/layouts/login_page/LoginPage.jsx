import React, { useState, useEffect } from 'react';
import validator from 'validator';
//login page styles
import {
    LoginPageWrapper, LoginForm, LoginFormHeader, LoginFormContent, LoginFormSubmitButton, LoginFormErrMessage,
    LoginFormGroup
} from './LoginPageStyles';
//components
import ImageLoader from '../../global/image_loader/ImageLoader';
import CustomInput from '../../global/form_components/CustomInput';
//images
import BackgroundImageMin from '../../../assets/images/avengers-min.jpg';
import BackgroundImage from '../../../assets/images/avengers.jpg';
//actions
import { loginAction } from '../../../actions/userDataActions';
//redux
import { useDispatch } from "react-redux";

//changes to form inputs are executed from here, easy to scale edit and delete
const initialLoginData = [
    {
        key: 'unique_email_key',
        label: "Email address",
        type: "email",
        name: "email",
        value: "",
        validated: false,
        errMessage: 'Invalid Email'
    },
    {
        key: 'unique_password_key',
        label: "Password",
        type: "password",
        name: "password",
        value: "",
        validated: false,
        errMessage: 'Password must contain at least one number, one capital letter and contain at least 8 characters'
    }
];

const LoginPage = () => {

    const dispatch = useDispatch();
    const [loginFormData, setLoginFormData] = useState(initialLoginData);
    const [validationState, setValidationState] = useState(false);
    const [loader, setLoader] = useState(false);
    const { email, password } = loginFormData;

    const loginInputChangeHandler = (name, value, index) => {

        let newState = loginFormData.map(item => item);
        newState[index].value = value;

        if (name === 'email') {
            if (validator.isEmail(value)) {
                newState[index].validated = true;
            } else {
                newState[index].validated = false;
            }

        } else if (name === 'password') {
            //check if contains a capital letter and a number
            if (!validator.isLowercase(value) && /\d/.test(value) && value.length > 7) {
                newState[index].validated = true;
            } else {
                newState[index].validated = false;
            }
        }

        setLoginFormData(newState);
        setValidationState(() => determineValidated(newState));
    }

    const submitLoginForm = (e) => {
        e.preventDefault();
        setLoader(true)
        // can spread more values from state form object to make form subbmission dynamic
        // but no knowledge if endpoint can support this so used email and password as is
        dispatch(loginAction({ email, password }));
    }

    const determineValidated = (stateArray) => {
        return stateArray.filter(formField => !formField.validated).length === 0
    }

    return (
        <LoginPageWrapper>
            <LoginForm onSubmit={submitLoginForm}>
                <LoginFormHeader>
                    <ImageLoader
                        alt="avengers-login-banner"
                        lowQualitySrc={BackgroundImageMin}
                        highQualitySrc={BackgroundImage}
                        styles={{ objectFit: 'cover', objectPosition: '50% 25%' }}
                    />
                </LoginFormHeader>

                <LoginFormContent>
                    {loginFormData.map((input, index) =>
                        <LoginFormGroup key={input.key}>
                            <CustomInput
                                index={index}
                                label={input.label}
                                type={input.type}
                                name={input.name}
                                value={input.value}
                                onChange={loginInputChangeHandler}
                            />
                            {!input.validated && input.value.length > 0 ?
                                <LoginFormErrMessage>
                                    {input.errMessage}
                                </LoginFormErrMessage>
                                :
                                null
                            }

                        </LoginFormGroup>
                    )}

                    <LoginFormSubmitButton
                        type="submit"
                        disabled={!validationState || loader}
                        style={!validationState || loader ? { opacity: '0.5' } : {}}
                    >
                        {loader ? 'loading...' : 'Login'}
                    </LoginFormSubmitButton>
                </LoginFormContent>

            </LoginForm>
        </LoginPageWrapper>
    )
}

export default LoginPage;
