import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { CTest, MTest } from '.'

const meta = {
  title: 'Components/CTest',
  component: CTest,
  tags: ['autodocs'],
  args: MTest.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof CTest>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
