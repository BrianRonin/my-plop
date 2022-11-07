import * as S from './S.a_test07'
import { aTest01Props } from '../a_test01/a_test01'


export type aTest07Props = {
	test: any
	testDois: any
	ATest01Props: aTest01Props
}

export const ATest07 = ({ test, testDois, ATest01Props }: aTest07Props) => {
  return (
		<S.Main></S.Main>
	)
}
