import { Meta, Story } from '@storybook/react/types-6-0'
import { Test06, test06Props } from './test06'


export default {
  title: 'components/group/test06',
  component: Test06,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test06Props > = (args) => <Test06 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
