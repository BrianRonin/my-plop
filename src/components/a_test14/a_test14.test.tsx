import { renderTheme } from '../../styles/render-theme'
import { ATest14 } from './a_test14'
import { mock_a_test14 } from './M.a_test14'

describe('<ATest14 />', () => {
  it('should render', () => {
    renderTheme(<ATest14 { ...mock_a_test14 } />)
  })
})
