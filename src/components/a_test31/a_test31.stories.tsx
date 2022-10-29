import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest31, aTest31Props } from './a_test31'
??importMock??

export default {
  title: 'components/a_test31',
  component: ATest31,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest31Props > = (args) => <ATest31 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
