import { Meta, Story } from '@storybook/react/types-6-0'


import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_Test3 } from './S.test3'

export default {
  title: 'components/no/test3',
  
  
} as Meta

const _S_Test3 = styled.index`
  ${({theme}) => css`
    ${S_Test3}
  `}
`


export const Template: Story = (args) => (
	<_S_Test3>
		<h1>Conteudo</h1>
	</_S_Test3>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}