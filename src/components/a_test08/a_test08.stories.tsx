import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest08, aTest08Props } from './a_test08'
??importMock??

export default {
  title: 'components/a_test08',
  component: ATest08,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest08Props > = (args) => <ATest08 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
