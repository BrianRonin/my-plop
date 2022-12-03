import * as S from './S.test00'

export type test00Props = {
	children: React.ReactNode
	umaProp: any
	propDois: any
}

export const Test00 = ({ children, umaProp, propDois }: test00Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
