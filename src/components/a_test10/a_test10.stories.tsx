import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest10, aTest10Props } from './a_test10'
import { mock_a_test10 } from './M.a_test10'

export default {
  title: 'components/a_test10',
  component: ATest10,
  args: mock_a_test10
} as Meta

 export const Template: Story<aTest10Props > = (args) => <ATest10 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
