import styled, { css, DefaultTheme } from 'styled-components'
import { aTest02Props } from './a_test02'

type S_aTest02 =Pick<aTest02Props, 'testDois'>

export const Main = styled.div<S_aTest02>`
  ${({ theme }) => css`
    //
  `}
`
