import styled, { css, DefaultTheme } from 'styled-components'
import { aTest16Props } from './a_test16'
type S_aTest16 = Pick<aTest16Props, 'testDois'>

export const Main = styled.div<S_aTest16>`
  ${({ theme }) => css`
    //
  `}
`
