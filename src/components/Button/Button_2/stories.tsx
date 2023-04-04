import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C2Button, M2Button } from '.'

const meta = {
  title: 'Components/Button/C2Button',
  component: C2Button,
  tags: ['autodocs'],
  args: M2Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C2Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
