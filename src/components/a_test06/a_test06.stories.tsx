import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest06, aTest06Props } from './a_test06'
??importMock??

export default {
  title: 'components/a_test06',
  component: ATest06,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest06Props > = (args) => <ATest06 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
