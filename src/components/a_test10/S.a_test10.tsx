import styled, { css, DefaultTheme } from 'styled-components'
import { aTest10Props } from './a_test10'
type S_test, testDois = Pick<aTest10Props, 'testDois'>
w
export const Main = styled.div<S_test, testDois>`
  ${({ theme }) => css`
    //
  `}
`
