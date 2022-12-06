import { Meta, Story } from '@storybook/react/types-6-0'
import { Test11, test11Props } from './test11'


export default {
  title: 'components/group/test11',
  component: Test11,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test11Props > = (args) => <Test11 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
