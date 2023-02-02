import * as S from './styles'
import * as T from './types'
export * as S4Test from './styles'
export * as M4Test from './mock'
export * as T4Test from './types'



export const C4Test = ({ children, a, b, c }: T.Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
