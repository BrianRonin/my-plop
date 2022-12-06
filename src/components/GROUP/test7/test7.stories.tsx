import { Meta, Story } from '@storybook/react/types-6-0'


import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_Test7 } from './S.test7'

export default {
  title: 'components/group/test7',
  
  
} as Meta

const _S_Test7 = styled.div`
  ${({theme}) => css`
    ${S_Test7}
  `}
`


export const Template: Story = (args) => <_S_Test7 />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}