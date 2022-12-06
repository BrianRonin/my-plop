import * as S from './S.test4'

export type test4Props = {
	children: React.ReactNode
}

export const Test4 = ({ children }: test4Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
