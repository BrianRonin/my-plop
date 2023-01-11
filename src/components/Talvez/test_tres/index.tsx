import * as S from './styles.tsx'

export type testTresProps = {
	children: React.ReactNode
}

export const TestTres = ({ children }: testTresProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
