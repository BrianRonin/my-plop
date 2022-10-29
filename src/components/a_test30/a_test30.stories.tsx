import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest30, aTest30Props } from './a_test30'
??importMock??

export default {
  title: 'components/a_test30',
  component: ATest30,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest30Props > = (args) => <ATest30 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
