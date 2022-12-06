import { Meta, Story } from '@storybook/react/types-6-0'
import { Test0, test0Props } from './test0'
import { mock_test0 } from './M.test0'

export default {
  title: 'components/no/test0',
  component: Test0,
  args: mock_test0,
} as Meta

export const Template: Story<test0Props> = (args) => (
  <Test0 {...args} />
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
