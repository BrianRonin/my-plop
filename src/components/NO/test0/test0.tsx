import * as S from './S.test0'

export type test0Props = {
	children: React.ReactNode
}

export const Test0 = ({ children }: test0Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
