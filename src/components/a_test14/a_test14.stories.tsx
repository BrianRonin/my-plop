import { Meta, Story } from '@storybook/react/types-6-0'
import { ATest14, aTest14Props } from './a_test14'
import { mock_a_test14 } from './M.a_test14'

export default {
  title: 'components/a_test14',
  component: ATest14,
  args: mock_a_test14
} as Meta

 export const Template: Story<aTest14Props > = (args) => <ATest14 {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
