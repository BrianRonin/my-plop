import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest0, aTest0Props } from './a_test0'
??importMock??

export default {
  title: 'components/a_test0',
  component: ATest0,
  args: ??hasMock??
} as Meta
 // 
 export const Template: Story<aTest0Props > = (args) => <ATest0 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
