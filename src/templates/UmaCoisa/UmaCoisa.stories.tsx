import { Meta, Story } from '@storybook/react/types-6-0'
import { UmaCoisa, umaCoisaProps } from './UmaCoisa'
import { mock_uma_coisa } from './M.uma_coisa'

export default {
  title: 'components/uma coisa',
  component: UmaCoisa,
  args: mock_uma_coisa
} as Meta

 export const Template: Story<umaCoisaProps > = (args) => <UmaCoisa {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
