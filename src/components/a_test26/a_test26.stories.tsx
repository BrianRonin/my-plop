import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest26, aTest26Props } from './a_test26'
??importMock??

export default {
  title: 'components/a_test26',
  component: ATest26,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest26Props > = (args) => <ATest26 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
