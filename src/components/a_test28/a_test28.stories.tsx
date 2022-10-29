import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest28, aTest28Props } from './a_test28'
??importMock??

export default {
  title: 'components/a_test28',
  component: ATest28,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest28Props > = (args) => <ATest28 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
