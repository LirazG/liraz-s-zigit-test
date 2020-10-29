import styled, { css } from 'styled-components';
import { displayFlex } from '../../../global_styles/mixins';
import { colors, general } from '../../../global_styles/variables';

// Custom Input styles
export const CustomInputTag = styled.input`
    width: 100%;
    height: 4.8rem;
    outline: 0;
    border: none;
    font-size: 1.4rem;
    border-radius: 5px;
    margin-bottom: 3rem;
    background-color: ${colors.colorLightBlue};
    padding: 0 1.6rem;
    ${displayFlex('row', 'space-between', 'center')};
`

export const CustomInputLabel = styled.label`
    margin-bottom: 1rem;
    font-size:1.8rem;
    display: block;
`

// END Custom Input styles