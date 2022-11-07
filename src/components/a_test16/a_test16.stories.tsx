import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest16, aTest16Props } from './a_test16'
import { mock_a_test16 } from './M.a_test16'

export default {
  title: 'components/a_test16',
  component: ATest16,
  args: mock_a_test16
} as Meta

 export const Template: Story<aTest16Props > = (args) => <ATest16 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
