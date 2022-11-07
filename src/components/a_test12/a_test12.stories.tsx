import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest12, aTest12Props } from './a_test12'
import { mock_a_test12 } from './M.a_test12'

export default {
  title: 'components/a_test12',
  component: ATest12,
  args: mock_a_test12
} as Meta

 export const Template: Story<aTest12Props > = (args) => <ATest12 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
