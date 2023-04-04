import * as S from './styles'
import * as T from './types'
import Presets from './presets.css'
export * as S3Button from './styles'
export * as M3Button from './mock'
export * as T3Button from './types'



export const C3Button = ({ prop1, prop2, styles }: T.Props) => {
const Styles: T.Styles = {
    ...Presets(theme)[stylesPreset ?? 'default'],
    ...styles,
}

  return (
		<S.Main></S.Main>
	)
}
