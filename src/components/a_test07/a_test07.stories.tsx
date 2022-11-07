import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest07, aTest07Props } from './a_test07'
import { mock_a_test07 } from './M.a_test07'

export default {
  title: 'components/a_test07',
  component: ATest07,
  args: mock_a_test07
} as Meta

 export const Template: Story<aTest07Props > = (args) => <ATest07 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
