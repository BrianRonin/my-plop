import * as S from './styles'
import * as T from './types'
import { useTheme } from '@emotion/react'
import Presets from './presets.css'
export * as SFafAfalkfjAflkaf from './styles'
export * as MFafAfalkfjAflkaf from './mock'
export * as TFafAfalkfjAflkaf from './types'



export const FafAfalkfjAflkaf = ({ styles, stylesPreset }: T.Props) => {
    const theme = useTheme()
    const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main styles={Styles}></S.Main>
	)
}
