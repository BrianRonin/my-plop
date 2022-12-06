import { Meta, Story } from '@storybook/react/types-6-0'
import { Test3, test3Props } from './test3'


export default {
  title: 'components/group/test3',
  
  __hasArgs__
} as Meta

const _S_Test3 = styled{{ htmlElement }}`
  ${({theme}) => css`
    ${S_Test3}
  `}
`


export const Template: Story = () => (
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

// component: Test3,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test3Props >
// __component__ : Test3