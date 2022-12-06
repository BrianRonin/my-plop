import * as S from './S.test7'

export type test7Props = {
	children: React.ReactNode
	propOne: any
	propTwo: any
}

export const Test7 = ({ children, propOne, propTwo }: test7Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
