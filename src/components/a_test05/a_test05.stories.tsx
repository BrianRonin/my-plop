import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest05, aTest05Props } from './a_test05'
??importMock??

export default {
  title: 'components/a_test05',
  component: ATest05,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest05Props > = (args) => <ATest05 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
