import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest15, aTest15Props } from './a_test15'
import { mock_a_test15 } from './M.a_test15'

export default {
  title: 'components/a_test15',
  component: ATest15,
  args: mock_a_test15
} as Meta

 export const Template: Story<aTest15Props > = (args) => <ATest15 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
