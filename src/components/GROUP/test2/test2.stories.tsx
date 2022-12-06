import { Meta, Story } from '@storybook/react/types-6-0'
import { Test2, test2Props } from './test2'


export default {
  title: 'components/group/test2',
  
  
} as Meta


export const Template: Story = (__hasArg__) => (
	<_S_Test2>
		<h1>Conteudo</h1>
	</_S_Test2>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test2,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test2Props >
// __component__ : Test2