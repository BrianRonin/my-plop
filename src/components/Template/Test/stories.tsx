import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { Test, MTest } from '.'

const meta = {
  title: 'Components/Template/Test',
  component: Test,
  tags: ['autodocs'],
  args: MTest.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
