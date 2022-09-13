import { Product } from '../Product'
import { ShowcaseContainer, ShowcaseContent } from './styles'

import { products } from '../../products-db/products'

export function Showcase() {
  return (
    <ShowcaseContainer>
      <h1>Nossos cafés</h1>
      <ShowcaseContent>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              description={product.description}
              id={product.id}
              image={product.image}
              inventory={product.inventory}
              priceInCents={product.priceInCents}
              tags={product.tags}
              title={product.title}
            />
          )
        })}
      </ShowcaseContent>
    </ShowcaseContainer>
  )
}
