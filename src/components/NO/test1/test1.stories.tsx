import { Meta, Story } from '@storybook/react/types-6-0'
import { Test1, test1Props } from './test1'
import { mock_test1 } from './M.test1'

export default {
  title: 'components/no/test1',
  component: Test1,
  args: mock_test1,
} as Meta


export const Template: Story< test1Props> = (args) => <Test1 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}