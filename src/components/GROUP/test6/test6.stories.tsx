import { Meta, Story } from '@storybook/react/types-6-0'


import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_Test6 from './S.test6' }

export default {
  title: 'components/group/test6',
  
  
} as Meta

const _S_Test6 = styled.div`
  ${({theme}) => css`
    ${S_Test6}
  `}
`


export const Template: Story = (args) => (
	<_S_Test6>
		<h1>Conteudo</h1>
	</_S_Test6>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test6,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test6Props >
// __component__ : Test6