import { css } from 'styled-components';

export const displayFlex = (dir = 'row', just = 'flex-start', align = 'flex-start') => css`
  display:flex;
  flex-direction: ${dir};
  justify-content: ${just};
  align-items: ${align};
`