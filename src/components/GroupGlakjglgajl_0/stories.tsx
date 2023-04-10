import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Glakjglgajl, M0Glakjglgajl } from '.'

const meta = {
  title: 'Components/Group/C0Glakjglgajl',
  component: C0Glakjglgajl,
  tags: ['autodocs'],
  args: M0Glakjglgajl.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Glakjglgajl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
