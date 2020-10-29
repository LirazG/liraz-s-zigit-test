import styled from 'styled-components';
import { displayFlex } from '../../../global_styles/mixins';
import { colors, general } from '../../../global_styles/variables';

export const LoginPageWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.colorLightGray};
    ${displayFlex('row', 'center', 'center')};
`

export const LoginForm = styled.form`
    width: 70rem;
    border-radius: 5px;
    box-shadow: ${general.lightShadow};
    margin: 0 2rem;
`

export const LoginFormHeader = styled.header`
    height: 25rem;
`

export const LoginFormContent = styled.div`
    padding: 2rem;
`

export const LoginFormSubmitButton = styled.button`
    width:100%;
    background-color: ${colors.colorDarkBlue};
    color: ${colors.colorWhite};
    border-radius: 5px;
    height: 4.8rem;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-top:3rem;
`


export const LoginFormErrMessage = styled.p`
    position: absolute;
    left:0;
    bottom:-5px;
    transform: translateY(100%);
    color: ${colors.colorError};
`

export const LoginFormGroup = styled.div`
    position: relative;
`

