import { PageWrapper } from 'App.styled'
import { Helmet } from 'react-helmet'


const HomePage: React.FunctionComponent = () => {
  return <>
    <Helmet>
      <title>Гланая страница маркетпласе MW</title>
    </Helmet>
    <PageWrapper>
     <h1> Главная страница</h1>
    </PageWrapper>
  </>
}

export default HomePage