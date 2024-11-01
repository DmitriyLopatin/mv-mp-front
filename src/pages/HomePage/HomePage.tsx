import { PageWrapper } from 'App.styled'
import { Helmet } from 'react-helmet'
import { ProductGroup, ProductGroupContainer } from './styled'
import { dummyProducts } from './dummyProducts'
import ProductCard from 'blocks/ProductCard.tsx/ProductCard'


const HomePage: React.FunctionComponent = () => {
  return <>
    <Helmet>
      <title>Гланая страница маркетпласе MW</title>
    </Helmet>
    <PageWrapper>
      <ProductGroup>
        <h2> Главная страница</h2>
        <ProductGroupContainer>
          {dummyProducts.map(p => <ProductCard {...p} key={p.id} />)}
        </ProductGroupContainer>
      </ProductGroup>

    </PageWrapper>
  </>
}

export default HomePage