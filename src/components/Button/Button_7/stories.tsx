import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C7Button, M7Button } from '.'

const meta = {
  title: 'Components/Button/C7Button',
  component: C7Button,
  tags: ['autodocs'],
  args: M7Button.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C7Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
