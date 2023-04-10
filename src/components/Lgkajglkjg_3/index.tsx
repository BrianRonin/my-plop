import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as S3Lgkajglkjg from './styles'
export * as M3Lgkajglkjg from './mock'
export * as T3Lgkajglkjg from './types'



export const C3Lgkajglkjg = ({ styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
