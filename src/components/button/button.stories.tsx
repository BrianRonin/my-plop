import { Meta, Story } from '@storybook/react/types-6-0'
import { Button, buttonProps } from './button'
import { mock_button } from './M.button'

export default {
  title: 'components/button',
  component: Button,
  args: mock_button
} as Meta

 export const Template: Story<buttonProps > = (args) => <Button {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
