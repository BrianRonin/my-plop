import * as S from './styles'
import * as T from './types'
export * as S6Test from './styles'
export * as M6Test from './mock'
export * as T6Test from './types'



export const C6Test = ({ children, a, b, c }: T.Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
