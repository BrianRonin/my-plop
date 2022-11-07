import { renderTheme } from '../../styles/render-theme'
import { ATest09 } from './a_test09'
import { mock_a_test09 } from './M.a_test09'

describe('<ATest09 />', () => {
  it('should render', () => {
    renderTheme(<ATest09 { ...mock_a_test09 } />)
  })
})
