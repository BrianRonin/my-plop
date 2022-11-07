import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest03, aTest03Props } from './a_test03'
import { mock_a_test03 } from './M.a_test03'

export default {
  title: 'components/a_test03',
  component: ATest03,
  args: mock_undefined
} as Meta

 export const Template: Story<aTest03Props > = (args) => <ATest03 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
