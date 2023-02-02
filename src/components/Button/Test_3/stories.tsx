import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C3Test, M3Test } from '.'

const meta = {
  title: 'Components/button/C3Test',
  component: C3Test,
  tags: ['autodocs'],
  args: M3Test.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C3Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
