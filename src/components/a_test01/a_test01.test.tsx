import { renderTheme } from '../../styles/render-theme'
import { ATest01 } from './a_test01'
import { mock_a_test01 } from './M.a_test01'

describe('<ATest01 />', () => {
  it('should render', () => {
    renderTheme(<ATest01 { ...mock_undefined } />)
  })
})
