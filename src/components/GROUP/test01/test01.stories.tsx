import { Meta, Story } from '@storybook/react/types-6-0'
import { Test01, test01Props } from './test01'
import { mock_test01 } from './M.test01'

export default {
  title: 'components/group/test01',
  component: Test01,
  args: mock_test01
} as Meta

 export const Template: Story<test01Props > = (args) => <Test01 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
