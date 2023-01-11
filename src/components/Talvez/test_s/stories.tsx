import { Meta, Story } from '@storybook/react/types-6-0'
import { TestS, testSProps } from './index'
import { mock_test_s } from './mock'

export default {
  title: 'components/talvez/test s',
  component: TestS,
  args: mock_test_s,
} as Meta


export const Template: Story< testSProps> = (args) => <TestS {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}