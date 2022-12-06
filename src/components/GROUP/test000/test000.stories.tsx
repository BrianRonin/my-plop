import { Meta, Story } from '@storybook/react/types-6-0'
import { Test000, test000Props } from './test000'
import { mock_test000 } from './M.test000'

export default {
  title: 'components/group/test000',
  component: Test000,
  args: mock_test000
} as Meta

 export const Template: Story<test000Props > = (args) => <Test000 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
