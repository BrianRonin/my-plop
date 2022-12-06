import { Meta, Story } from '@storybook/react/types-6-0'
import { Test0, test0Props } from './test0'


export default {
  title: 'components/group/test0',
  
  
} as Meta


export const Template: Story = () => (
	<_S_Test0>
		<h1>Conteudo</h1>
	</_S_Test0>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test0,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test0Props >
// __component__ : Test0