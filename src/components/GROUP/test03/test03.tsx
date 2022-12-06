import * as S from './S.test03'

export type test03Props = {
	children: React.ReactNode
}

export const Test03 = ({ children }: test03Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
