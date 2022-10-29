import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest25, aTest25Props } from './a_test25'
??importMock??

export default {
  title: 'components/a_test25',
  component: ATest25,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest25Props > = (args) => <ATest25 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
