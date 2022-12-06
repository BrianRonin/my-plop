import * as S from './S.test04'

export type test04Props = {
	children: React.ReactNode
}

export const Test04 = ({ children }: test04Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
