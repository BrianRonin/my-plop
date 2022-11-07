import { renderTheme } from '../../styles/render-theme'
import { ATest05 } from './a_test05'
import { mock_a_test05 } from './M.a_test05'

describe('<ATest05 />', () => {
  it('should render', () => {
    renderTheme(<ATest05 { mock_a_test05 } />)
  })
})
