import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest04, aTest04Props } from './a_test04'
import { mock_a_test04 } from './M.a_test04'

export default {
  title: 'components/a_test04',
  component: ATest04,
  args: mock_undefined
} as Meta

 export const Template: Story<aTest04Props > = (args) => <ATest04 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
