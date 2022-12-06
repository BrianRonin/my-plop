import { Meta, Story } from '@storybook/react/types-6-0'
import { Test4, test4Props } from './test4'


export default {
  title: 'components/group/test4',
  
  
} as Meta

const _S_Test4 = styled.div`
  ${({theme}) => css`
    ${S_Test4}
  `}
`


export const Template: Story = (__hasArg__) => (
	<_S_Test4>
		<h1>Conteudo</h1>
	</_S_Test4>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}

// component: Test4,
// args: {
	children: <h1>tudo ok<h1>,
	},
// __typeComponent__ : <test4Props >
// __component__ : Test4