import { Meta, Story } from '@storybook/react/types-6-0'
import { Test4, test4Props } from './index'


export default {
  title: 'components/test__4',
  component: Test_4,
  args: {},
} as Meta

 export const Template: Story<test_4Props > = (args) => <Test_4 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
