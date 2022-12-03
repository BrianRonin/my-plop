import { renderTheme } from '../../styles/render-theme'
__import { UmaCoisa } from './UmaCoisa'__
import { mock_uma_coisa } from './M.uma_coisa'

describe('<UmaCoisa />', () => {
  it('should render', () => {
    renderTheme(<UmaCoisa { ...mock_uma_coisa } />)
  })
})
