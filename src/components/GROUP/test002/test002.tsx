import * as S from './S.test002'

export type test002Props = {
	children: React.ReactNode
}

export const Test002 = ({ children }: test002Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
