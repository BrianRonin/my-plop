import { Meta, Story } from '@storybook/react/types-6-0'
import { Test00, test00Props } from './test00'
import { mock_test00 } from './M.test00'

export default {
  title: 'components/grouppp/test00',
  component: Test00,
  args: mock_test00
} as Meta

 export const Template: Story<test00Props > = (args) => <Test00 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
