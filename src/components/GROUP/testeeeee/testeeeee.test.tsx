import { renderTheme } from '../../../styles/render-theme'
import { Testeeeee } from './testeeeee'
import { mock_testeeeee } from './M.testeeeee'

describe('<Testeeeee />', () => {
  it('should render', () => {
    renderTheme(<Testeeeee { ...mock_testeeeee } />)
  })
})
