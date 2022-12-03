import * as S from './S.test0'

export type test0Props = {
	children: React.ReactNode
	propOne: any
}

export const Test0 = ({ children, propOne }: test0Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
