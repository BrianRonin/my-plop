import { Meta, Story } from '@storybook/react/types-6-0'
import { Test1, test1Props } from './index'
import { mock_test_1 } from './mock'

export default {
  title: '',
  component: Test1,
  args: mock_test_1,
} as Meta


export const Template: Story< test1Props> = (args) => <Test1 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}