import { Meta, Story } from '@storybook/react/types-6-0'
import { Test7, test7Props } from './test7'
import { mock_test7 } from './M.test7'

export default {
  title: 'components/no/test7',
  component: Test7,
  args: mock_test7,
} as Meta


export const Template: Story< test7Props> = (args) => <Test7 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}