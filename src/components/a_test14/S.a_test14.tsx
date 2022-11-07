import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { aTest14Props } from './a_test14'
type S_aTest14 = Pick<aTest14Props, 'testDois'>

export const Main = styled.div<S_aTest14>`
  ${({ theme }) => css`
    //
  `}
`
