import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest06, aTest06Props } from './a_test06'
import { mock_a_test06 } from './M.a_test06'

export default {
  title: 'components/a_test06',
  component: ATest06,
  args: mock_a_test06
} as Meta

 export const Template: Story<aTest06Props > = (args) => <ATest06 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
