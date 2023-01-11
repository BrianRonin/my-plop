import { Meta, Story } from '@storybook/react/types-6-0'
import { Posts, postsProps } from './index'
import { mock_posts } from './mock'

export default {
  title: 'components/posts',
  component: Posts,
  args: mock_posts
} as Meta

 export const Template: Story<postsProps > = (args) => <Posts {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
