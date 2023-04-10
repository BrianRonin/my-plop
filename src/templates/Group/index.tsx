import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as STest from './styles'
export * as MTest from './mock'
export * as TTest from './types'



export const Test = ({ aaa, bb, styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
