import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as S0Glajegolije from './styles'
export * as M0Glajegolije from './mock'
export * as T0Glajegolije from './types'



export const C0Glajegolije = ({ styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
