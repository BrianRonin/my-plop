import { Meta, Story } from '@storybook/react/types-6-0'
import { TestTres, testTresProps } from '.'
import { mock_test_tres } from './mock.tsx'

export default {
  title: 'components/talvez/test tres',
  component: TestTres,
  args: mock_test_tres,
} as Meta


export const Template: Story< testTresProps> = (args) => <TestTres {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}