import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest02, aTest02Props } from './a_test02'
import { mock_a_test02 } from './M.a_test02'

export default {
  title: 'components/group/a_test02',
  component: ATest02,
  args: mock_undefined
} as Meta

 export const Template: Story<aTest02Props > = (args) => <ATest02 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
