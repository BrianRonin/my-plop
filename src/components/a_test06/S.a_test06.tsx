import styled, { css, DefaultTheme } from 'styled-components'
import { aTest06Props } from './a_test06'
type S_test, test, ATest01Props =Pick<aTest06Props, 'test'>

export const Main = styled.div<S_test, test, ATest01Props>`
  ${({ theme }) => css`
    //
  `}
`
