import * as S from './S.a_test12'

export type aTest12Props = 
	children: React.ReactNode{
	test: any
	testDois: any
}

export const ATest12 = ({ children, test, testDois }: aTest12Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
