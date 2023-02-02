import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C2Test2, M2Test2 } from '.'

const meta = {
  title: 'Components/button/C2Test2',
  component: C2Test2,
  tags: ['autodocs'],
  args: M2Test2.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C2Test2>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
