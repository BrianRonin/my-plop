import { Meta, Story } from '@storybook/react/types-6-0'
import { TesteDois, testeDoisProps } from '.'
import { mock_teste_dois } from './mock.tsx'

export default {
  title: 'components/button/teste dois',
  component: TesteDois,
  args: mock_teste_dois,
} as Meta


export const Template: Story< testeDoisProps> = (args) => <TesteDois {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}