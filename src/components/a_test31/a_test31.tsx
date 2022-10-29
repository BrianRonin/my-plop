import * as S from './S.a_test31'
import {  }

export type aTest31Props = {
	children: React.ReactNode
	propOpcional?: any
	PropComponentProps: propComponentProps
	propNormal: any
	PropOpcionalComponentProps?: propOpcionalComponentProps
	
}

export const ATest31 = ({ children, propOpcional, PropComponentProps, propNormal, PropOpcionalComponentProps }: aTest31Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
