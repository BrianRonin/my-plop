import * as S from './styles'
import * as T from './types'
export * as S5Test from './styles'
export * as M5Test from './mock'
export * as T5Test from './types'



export const C5Test = ({ children, a, b, c }: T.Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
