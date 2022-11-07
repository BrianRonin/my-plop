import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest09, aTest09Props } from './a_test09'
import { mock_a_test09 } from './M.a_test09'

export default {
  title: 'components/a_test09',
  component: ATest09,
  args: mock_a_test09
} as Meta

 export const Template: Story<aTest09Props > = (args) => <ATest09 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
