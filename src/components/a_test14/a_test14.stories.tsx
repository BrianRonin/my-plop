import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest14, aTest14Props } from './a_test14'
??importMock??

export default {
  title: 'components/a_test14',
  component: ATest14,
  args: ??hasMock??
} as Meta
 // Mock,Chield,Props,Typescript,Test,Storybook
 export const Template: Story<aTest14Props > = (args) => <ATest14 {...args} />

Template.parameters = {
  backgrounds: {
    default: ''
  },
}
