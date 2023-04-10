import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { Lkgjalkgj, MLkgjalkgj } from '.'

const meta = {
  title: 'Components/Groupp/Lkgjalkgj',
  component: Lkgjalkgj,
  tags: ['autodocs'],
  args: MLkgjalkgj.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof Lkgjalkgj>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
