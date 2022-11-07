import styled, { css, DefaultTheme } from 'styled-components'
import { aTest15Props } from './a_test15'
type S_aTest15 = 
Pick<aTest15Props, 'testUm'> &
Pick<aTest15Props, 'ATest01Props'> &
Pick<aTest15Props, 'testQuatro'>

export const Main = styled.div<S_aTest15>`
  ${({ theme }) => css`
    //
  `}
`
