import * as S from './styles'
import * as T from './types'
import Presets from './presets.css'
export * as S5Button from './styles'
export * as M5Button from './mock'
export * as T5Button from './types'



export const C5Button = ({ styles }: T.Props) => {
const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main></S.Main>
	)
}
