import { Meta, Story } from '@storybook/react/types-6-0'
import { Test7, test7Props } from './test7'


export default {
  title: 'components/group/test7',
  component: Test7,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test7Props > = (args) => <Test7 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
