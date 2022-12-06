import * as S from './S.test10'

export type test10Props = {
	children: React.ReactNode
	test: any
}

export const Test10 = ({ children, test }: test10Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
