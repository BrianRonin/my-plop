import * as S from './S.test01'

export type test01Props = {
	children: React.ReactNode
}

export const Test01 = ({ children }: test01Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
