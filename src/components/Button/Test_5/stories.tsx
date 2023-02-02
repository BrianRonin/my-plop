import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C5Test, M5Test } from '.'

const meta = {
  title: 'Components/Button/C5Test',
  component: C5Test,
  tags: ['autodocs'],
  args: M5Test.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C5Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
