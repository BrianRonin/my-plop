import * as S from './S.test1'

export type test1Props = {
	children: React.ReactNode
}

export const Test1 = ({ children }: test1Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
