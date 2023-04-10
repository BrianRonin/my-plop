import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { Gjlajglkagj, MGjlajglkagj } from '.'

const meta = {
  title: 'Components/Groupppp/Gjlajglkagj',
  component: Gjlajglkagj,
  tags: ['autodocs'],
  args: MGjlajglkagj.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof Gjlajglkagj>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
