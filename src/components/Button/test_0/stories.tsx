import { Meta, Story } from '@storybook/react/types-6-0'
import { Test0, test0Props } from './index'
import { mock_test_0 } from './mock'

export default {
  title: '',
  component: Test0,
  args: mock_test_0,
} as Meta


export const Template: Story< test0Props> = (args) => <Test0 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}