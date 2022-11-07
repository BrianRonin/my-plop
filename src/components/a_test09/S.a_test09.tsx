import styled, { css, DefaultTheme } from 'styled-components'
import { aTest09Props } from './a_test09'
type S_test, testDois =Pick<aTest09Props, 'testDois'>

export const Main = styled.div<S_test, testDois>`
  ${({ theme }) => css`
    //
  `}
`
