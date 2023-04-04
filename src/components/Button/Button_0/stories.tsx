import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Button, M0Button } from '.'

const meta = {
  title: 'Components/Button/C0Button',
  component: C0Button,
  tags: ['autodocs'],
  args: M0Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
