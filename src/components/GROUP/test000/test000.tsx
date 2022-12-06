import * as S from './S.test000'

export type test000Props = {
	children: React.ReactNode
}

export const Test000 = ({ children }: test000Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
