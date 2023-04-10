import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as S0Glkajgloj from './styles'
export * as M0Glkajgloj from './mock'
export * as T0Glkajgloj from './types'



export const C0Glkajgloj = ({ styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
