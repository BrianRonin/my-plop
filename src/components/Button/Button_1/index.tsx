import * as S from './styles'
import * as T from './types'
import Presets from './presets.css'
export * as S1Button from './styles'
export * as M1Button from './mock'
export * as T1Button from './types'



export const C1Button = (, styles) => {  const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main></S.Main>
	)
}
