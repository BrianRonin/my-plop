import * as S from './styles'
import * as T from './types'
import Presets from './presets.css'
export * as S2Button from './styles'
export * as M2Button from './mock'
export * as T2Button from './types'



export const C2Button = ({ test, styles }: T.Props) => {
const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main></S.Main>
	)
}
