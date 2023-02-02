import * as S from './styles'
import * as T from './type'
export * as S3Test from './styles'
export * as M3Test from './mock'
export * as T3Test from './type'

export const C3Test = ({ children, a, b, c }: T.Props) => {
  return <S.Main>{children}</S.Main>
}
