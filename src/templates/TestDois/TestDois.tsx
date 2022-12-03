import * as S from './S.TestDois'

export type testDoisProps = {
	children: React.ReactNode
	umaProp: any
}

export const TestDois = ({ children, umaProp }: testDoisProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
