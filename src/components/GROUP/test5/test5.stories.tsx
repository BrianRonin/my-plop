import { Meta, Story } from '@storybook/react/types-6-0'
import { Test5, test5Props } from './test5'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_Test5 from './S.test5' }

export default {
  title: 'components/group/test5',
  
  
} as Meta

const _S_Test5 = styled.div`
  ${({theme}) => css`
    ${S_Test5}
  `}
`


export const Template: Story = (__hasArg__) => (
	<_S_Test5>
		<h1>Conteudo</h1>
	</_S_Test5>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test5,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test5Props >
// __component__ : Test5