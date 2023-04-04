import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C3Button, M3Button } from '.'

const meta = {
  title: 'Components/Button/C3Button',
  component: C3Button,
  tags: ['autodocs'],
  args: M3Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C3Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
