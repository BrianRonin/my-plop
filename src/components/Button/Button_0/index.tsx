import * as S from './styles'
import * as T from './types'
import Presets from './presets.css'
export * as S0Button from './styles'
export * as M0Button from './mock'
export * as T0Button from './types'



export const C0Button = (, styles) => {  const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main></S.Main>
	)
}
