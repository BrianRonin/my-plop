import * as S from './S.base'

export type baseProps = {
	children: React.ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
