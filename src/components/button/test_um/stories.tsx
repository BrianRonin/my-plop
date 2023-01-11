import { Meta, Story } from '@storybook/react/types-6-0'
import { TestUm, testUmProps } from '.'
import { mock_test_um } from './mock.tsx'

export default {
  title: 'components/button/test um',
  component: TestUm,
  args: mock_test_um,
} as Meta


export const Template: Story< testUmProps> = (args) => <TestUm {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}