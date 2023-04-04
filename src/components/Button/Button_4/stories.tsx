import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C4Button, M4Button } from '.'

const meta = {
  title: 'Components/Button/C4Button',
  component: C4Button,
  tags: ['autodocs'],
  args: M4Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C4Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
