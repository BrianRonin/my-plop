import { Meta, Story } from '@storybook/react/types-6-0'
import { TestDois, testDoisProps } from './TestDois'
import { mock_test_dois } from './M.test_dois'

export default {
  title: 'components/test dois',
  component: TestDois,
  args: mock_test_dois
} as Meta

 export const Template: Story<testDoisProps > = (args) => <TestDois {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
