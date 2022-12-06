import * as S from './S.test8'

export type test8Props = {
	children: React.ReactNode
}

export const Test8 = ({ children }: test8Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
