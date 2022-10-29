import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest24, aTest24Props } from './a_test24'
??importMock??

export default {
  title: 'components/a_test24',
  component: ATest24,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest24Props > = (args) => <ATest24 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
