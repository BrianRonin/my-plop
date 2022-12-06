import { Meta, Story } from '@storybook/react/types-6-0'
import { Test03, test03Props } from './test03'


export default {
  title: 'components/group/test03',
  component: Test03,
  args: {
	children: <h1>tudo ok<h1>,
	},
} as Meta

 export const Template: Story<test03Props > = (args) => <Test03 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
