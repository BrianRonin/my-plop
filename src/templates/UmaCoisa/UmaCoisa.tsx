import * as S from './S.uma_coisa'

export type umaCoisaProps = {
	children: React.ReactNode
	propOne: any
}

export const UmaCoisa = ({ children, propOne }: umaCoisaProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
