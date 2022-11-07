import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest01, aTest01Props } from './a_test01'
import { mock_a_test01 } from './M.a_test01'

export default {
  title: 'components/a_test01',
  component: ATest01,
  args: mock_undefined
} as Meta

 export const Template: Story<aTest01Props > = (args) => <ATest01 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
