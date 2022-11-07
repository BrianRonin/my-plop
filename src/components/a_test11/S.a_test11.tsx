import styled, { css, DefaultTheme } from 'styled-components'
import { aTest11Props } from './a_test11'
type S_test, testDois = Pick<aTest11Props, 'testDois'>
w
export const Main = styled.div<S_test, testDois>`
  ${({ theme }) => css`
    //
  `}
`
