import styled, { css, DefaultTheme } from 'styled-components'
import { aTest08Props } from './a_test08'
type S_test, testDois =Pick<aTest08Props, 'testDois'>

export const Main = styled.div<S_test, testDois>`
  ${({ theme }) => css`
    //
  `}
`
