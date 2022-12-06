import { Meta, Story } from '@storybook/react/types-6-0'
import { Test10, test10Props } from './test10'
import { mock_test10 } from './M.test10'

export default {
  title: 'components/group/test10',
  component: Test10,
  args: mock_test10
} as Meta

 export const Template: Story<test10Props > = (args) => <Test10 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
