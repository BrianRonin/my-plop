import styled, { css, DefaultTheme } from 'styled-components'
import { aTest12Props } from './a_test12'
type S_aTest12 = Pick<aTest12Props, 'testDois'>
w
export const Main = styled.div<S_aTest12>`
  ${({ theme }) => css`
    //
  `}
`
