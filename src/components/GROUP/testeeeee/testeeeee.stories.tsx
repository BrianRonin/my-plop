import { Meta, Story } from '@storybook/react/types-6-0'
import { Testeeeee, testeeeeeProps } from './testeeeee'
import { mock_testeeeee } from './M.testeeeee'

export default {
  title: 'components/group/testeeeee',
  component: Testeeeee,
  args: mock_testeeeee
} as Meta

 export const Template: Story<testeeeeeProps > = (args) => <Testeeeee {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
