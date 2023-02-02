import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C6Test, M6Test } from '.'

const meta = {
  title: 'Components/Button/C6Test',
  component: C6Test,
  tags: ['autodocs'],
  args: M6Test.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C6Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
