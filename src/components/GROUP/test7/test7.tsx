import * as S from './S.test7'

export type test7Props = {
	children: React.ReactNode
}

export const Test7 = ({ children }: test7Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
