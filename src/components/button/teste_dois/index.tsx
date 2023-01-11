import * as S from './styles.tsx'

export type testeDoisProps = {
	children: React.ReactNode
}

export const TesteDois = ({ children }: testeDoisProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
