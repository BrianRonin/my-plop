import * as S from './S.a_test13'

export type aTest13Props = 
	children: React.ReactNode{
	test: any
	testDois: any
}

export const ATest13 = ({ children, test, testDois }: aTest13Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
