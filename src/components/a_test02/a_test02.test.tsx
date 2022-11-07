import { renderTheme } from '../../styles/render-theme'
import { ATest02 } from './a_test02'
import { mock_a_test02 } from './M.a_test02'

describe('<ATest02 />', () => {
  it('should render', () => {
    renderTheme(<ATest02 { ...mock_undefined } />)
  })
})
