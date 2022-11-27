import { renderTheme } from '../../styles/render-theme'
import { Button } from './button'
import { mock_button } from './M.button'

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button { ...mock_button } />)
  })
})
