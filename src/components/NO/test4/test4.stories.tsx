import { Meta, Story } from '@storybook/react/types-6-0'
import { Test4, test4Props } from './test4'
import { mock_test4 } from './M.test4'

export default {
  title: 'components/no/test4',
  component: Test4,
  args: mock_test4,
} as Meta


export const Template: Story< test4Props> = (args) => <Test4 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}