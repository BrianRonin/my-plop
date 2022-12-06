import { Meta, Story } from '@storybook/react/types-6-0'
import { Test1, test1Props } from './test1'


export default {
  title: 'components/group/test1',
  
  
} as Meta


export const Template: Story = (__hasArg__) => (
	<_S_Test1>
		<h1>Conteudo</h1>
	</_S_Test1>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test1,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test1Props >
// __component__ : Test1