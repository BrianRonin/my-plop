import { renderTheme } from '../../styles/render-theme'
import { ATest16 } from './a_test16'
import { mock_a_test16 } from './M.a_test16'

describe('<ATest16 />', () => {
  it('should render', () => {
    renderTheme(<ATest16 { ...mock_a_test16 } />)
  })
})
