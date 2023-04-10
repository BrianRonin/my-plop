import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { Alkgjalgkj, MAlkgjalgkj } from '.'

const meta = {
  title: 'Components/Alkgjalgkj',
  component: Alkgjalgkj,
  tags: ['autodocs'],
  args: MAlkgjalgkj.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof Alkgjalgkj>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
