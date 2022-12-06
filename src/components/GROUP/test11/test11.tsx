import * as S from './S.test11'

export type test11Props = {
	children: React.ReactNode
}

export const Test11 = ({ children }: test11Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
