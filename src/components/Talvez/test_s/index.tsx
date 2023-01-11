import * as S from './styles'

export type testSProps = {
	children: React.ReactNode
}

export const TestS = ({ children }: testSProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
