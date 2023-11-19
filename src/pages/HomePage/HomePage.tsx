import { Helmet } from 'react-helmet'
import { TestStyle } from './styled'

const HomePage: React.FunctionComponent = () => {
  return <>
    <Helmet>
      <title>Гланая страница маркетпласе</title>
    </Helmet>
    <TestStyle>Главная страница</TestStyle>
  </>
}

export default HomePage