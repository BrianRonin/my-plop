import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Glkajgloj, M0Glkajgloj } from '.'

const meta = {
  title: 'Components/Group/C0Glkajgloj',
  component: C0Glkajgloj,
  tags: ['autodocs'],
  args: M0Glkajgloj.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Glkajgloj>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
