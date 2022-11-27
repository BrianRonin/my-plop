import { renderTheme } from '../../styles/render-theme'
import { Base } from './base'
import { mock_base } from './M.base'

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base { ...mock_base } />)
  })
})
