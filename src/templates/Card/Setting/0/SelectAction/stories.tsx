import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { SelectAction, MSelectAction } from '.'

const meta = {
  title: 'Components/Cardsetting0/SelectAction',
  component: SelectAction,
  tags: ['autodocs'],
  args: MSelectAction.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof SelectAction>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
