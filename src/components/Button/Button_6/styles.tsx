import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Styles } from './types'

interface props {
  styles: Styles
}

export const Main = styled.div__typeProps__`
  ${({ theme, styles }) => css`
    //
  `}
`
