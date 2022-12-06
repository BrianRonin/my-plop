import { Meta, Story } from '@storybook/react/types-6-0'
import { Test8, test8Props } from './test8'


export default {
  title: 'components/group/test8',
  component: Test8,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test8Props > = (args) => <Test8 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
