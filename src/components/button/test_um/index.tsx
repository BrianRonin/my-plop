import * as S from './styles.tsx'

export type testUmProps = {
	children: React.ReactNode
}

export const TestUm = ({ children }: testUmProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
