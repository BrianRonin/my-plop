import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest29, aTest29Props } from './a_test29'
??importMock??

export default {
  title: 'components/a_test29',
  component: ATest29,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest29Props > = (args) => <ATest29 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
