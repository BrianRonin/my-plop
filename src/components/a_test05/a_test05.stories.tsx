import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest05, aTest05Props } from './a_test05'
import { mock_a_test05 } from './M.a_test05'

export default {
  title: 'components/a_test05',
  component: ATest05,
  args: mock_a_test05
} as Meta

 export const Template: Story<aTest05Props > = (args) => <ATest05 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
