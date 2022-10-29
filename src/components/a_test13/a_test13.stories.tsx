import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest13, aTest13Props } from './a_test13'
??importMock??

export default {
  title: 'components/a_test13',
  component: ATest13,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest13Props > = (args) => <ATest13 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
