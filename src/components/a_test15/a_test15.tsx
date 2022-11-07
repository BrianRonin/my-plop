import * as S from './S.a_test15'
import { aTest01Props } from '../a_test01/a_test01'


export type aTest15Props = 
	children: React.ReactNode{
	testUm: any
	testDois: any
	ATest01Props: aTest01Props
	testTres: any
	testQuatro?: any
}

export const ATest15 = ({ children, testUm, testDois, ATest01Props, testTres, testQuatro }: aTest15Props) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
