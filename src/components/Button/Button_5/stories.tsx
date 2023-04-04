import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C5Button, M5Button } from '.'

const meta = {
  title: 'Components/Button/C5Button',
  component: C5Button,
  tags: ['autodocs'],
  args: M5Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C5Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
