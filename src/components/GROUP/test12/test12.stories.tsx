import { Meta, Story } from '@storybook/react/types-6-0'
import { Test12, test12Props } from './test12'


export default {
  title: 'components/group/test12',
  component: Test12,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test12Props > = (args) => <Test12 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
