import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest11, aTest11Props } from './a_test11'
import { mock_a_test11 } from './M.a_test11'

export default {
  title: 'components/a_test11',
  component: ATest11,
  args: mock_a_test11
} as Meta

 export const Template: Story<aTest11Props > = (args) => <ATest11 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
