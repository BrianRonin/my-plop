import { renderTheme } from '../../styles/render-theme'
import { ATest04 } from './a_test04'
import { mock_a_test04 } from './M.a_test04'

describe('<ATest04 />', () => {
  it('should render', () => {
    renderTheme(<ATest04 { ...mock_undefined } />)
  })
})
