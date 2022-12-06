import * as S from './S.test12'

export type test12Props = {
	children: React.ReactNode
}

export const Test12 = ({ children }: test12Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
