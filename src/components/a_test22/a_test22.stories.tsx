import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest22, aTest22Props } from './a_test22'
??importMock??

export default {
  title: 'components/a_test22',
  component: ATest22,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest22Props > = (args) => <ATest22 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
