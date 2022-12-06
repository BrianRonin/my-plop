import { Meta, Story } from '@storybook/react/types-6-0'
import { Test002, test002Props } from './test002'
import { mock_test002 } from './M.test002'

export default {
  title: 'components/group/test002',
  component: Test002,
  args: mock_test002
} as Meta

 export const Template: Story<test002Props > = (args) => <Test002 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
