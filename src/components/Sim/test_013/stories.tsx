import { Meta, Story } from '@storybook/react/types-6-0'
import { Test013, test013Props } from './index'


export default {
  title: 'components/sim/test_013',
  component: Test013,
  args: {},,
} as Meta


export const Template: Story< test013Props> = (args) => <Test013 {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}