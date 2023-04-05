import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C8Button, M8Button } from '.'

const meta = {
  title: 'Components/SeiLa/C8Button',
  component: C8Button,
  tags: ['autodocs'],
  args: M8Button.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C8Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
