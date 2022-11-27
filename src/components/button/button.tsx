import * as S from './S.button'

export type buttonProps = {
	children: React.ReactNode
	test: any
	: any
}

export const Button = ({ children, test }: buttonProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
