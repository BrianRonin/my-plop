import * as S from './S.test9'

export type test9Props = {
	children: React.ReactNode
}

export const Test9 = ({ children }: test9Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
