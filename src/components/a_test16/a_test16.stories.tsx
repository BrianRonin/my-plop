import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest16, aTest16Props } from './a_test16'
??importMock??

export default {
  title: 'components/a_test16',
  component: ATest16,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest16Props > = (args) => <ATest16 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
