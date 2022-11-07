import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest08, aTest08Props } from './a_test08'
import { mock_a_test08 } from './M.a_test08'

export default {
  title: 'components/a_test08',
  component: ATest08,
  args: mock_a_test08
} as Meta

 export const Template: Story<aTest08Props > = (args) => <ATest08 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
