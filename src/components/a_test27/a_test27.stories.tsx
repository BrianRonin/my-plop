import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest27, aTest27Props } from './a_test27'
??importMock??

export default {
  title: 'components/a_test27',
  component: ATest27,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest27Props > = (args) => <ATest27 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
