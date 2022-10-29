import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest07, aTest07Props } from './a_test07'
??importMock??

export default {
  title: 'components/a_test07',
  component: ATest07,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest07Props > = (args) => <ATest07 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
