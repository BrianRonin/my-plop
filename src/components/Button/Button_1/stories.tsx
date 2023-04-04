import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C1Button, M1Button } from '.'

const meta = {
  title: 'Components/Button/C1Button',
  component: C1Button,
  tags: ['autodocs'],
  args: M1Button.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C1Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
