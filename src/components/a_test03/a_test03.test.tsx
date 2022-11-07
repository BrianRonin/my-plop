import { renderTheme } from '../../styles/render-theme'
import { ATest03 } from './a_test03'
import { mock_a_test03 } from './M.a_test03'

describe('<ATest03 />', () => {
  it('should render', () => {
    renderTheme(<ATest03 { ...mock_undefined } />)
  })
})
