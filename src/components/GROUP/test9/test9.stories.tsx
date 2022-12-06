import { Meta, Story } from '@storybook/react/types-6-0'
import { Test9, test9Props } from './test9'
import { mock_test9 } from './M.test9'

export default {
  title: 'components/group/test9',
  component: Test9,
  args: mock_test9
} as Meta

 export const Template: Story<test9Props > = (args) => <Test9 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
