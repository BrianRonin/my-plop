import * as S from './S.test06'

export type test06Props = {
	children: React.ReactNode
}

export const Test06 = ({ children }: test06Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
