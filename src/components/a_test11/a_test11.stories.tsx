import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest11, aTest11Props } from './a_test11'
??importMock??

export default {
  title: 'components/a_test11',
  component: ATest11,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest11Props > = (args) => <ATest11 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
