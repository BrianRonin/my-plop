import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest13, aTest13Props } from './a_test13'
import { mock_a_test13 } from './M.a_test13'

export default {
  title: 'components/a_test13',
  component: ATest13,
  args: mock_a_test13
} as Meta

 export const Template: Story<aTest13Props > = (args) => <ATest13 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
