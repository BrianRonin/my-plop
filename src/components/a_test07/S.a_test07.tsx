import styled, { css, DefaultTheme } from 'styled-components'
import { aTest07Props } from './a_test07'
type S_test, testDois, ATest01Props =
Pick<aTest07Props, 'testDois'> &
Pick<aTest07Props, 'ATest01Props'>

export const Main = styled.div<S_test, testDois, ATest01Props>`
  ${({ theme }) => css`
    //
  `}
`
