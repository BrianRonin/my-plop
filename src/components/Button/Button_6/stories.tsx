import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C6Button, M6Button } from '.'

const meta = {
  title: 'Components/Button/C6Button',
  component: C6Button,
  tags: ['autodocs'],
  args: M6Button.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C6Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
