import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as SLkgjalkgj from './styles'
export * as MLkgjalkgj from './mock'
export * as TLkgjalkgj from './types'



export const Lkgjalkgj = ({ lfkjaj, styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
