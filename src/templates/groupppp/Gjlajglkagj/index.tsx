import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as SGjlajglkagj from './styles'
export * as MGjlajglkagj from './mock'
export * as TGjlajglkagj from './types'



export const Gjlajglkagj = ({ aaa, bbb, styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
