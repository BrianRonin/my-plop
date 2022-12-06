import { renderTheme } from '../../../styles/render-theme'
import { Test000 } from './test000'
import { mock_test000 } from './M.test000'

describe('<Test000 />', () => {
  it('should render', () => {
    renderTheme(<Test000 { ...mock_test000 } />)
  })
})
