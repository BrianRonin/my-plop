import { Meta, Story } from '@storybook/react/types-6-0'
import { Test04, test04Props } from './test04'


export default {
  title: 'components/group/test04',
  component: Test04,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test04Props > = (args) => <Test04 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
