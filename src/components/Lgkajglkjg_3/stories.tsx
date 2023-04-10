import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C3Lgkajglkjg, M3Lgkajglkjg } from '.'

const meta = {
  title: 'Components/C3Lgkajglkjg',
  component: C3Lgkajglkjg,
  tags: ['autodocs'],
  args: M3Lgkajglkjg.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C3Lgkajglkjg>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
