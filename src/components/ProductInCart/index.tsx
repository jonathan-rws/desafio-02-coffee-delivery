import { Minus, Plus, Trash } from 'phosphor-react'
import { AmountSection, CoffeeTitle, ProductInCartContainer } from './styles'

import { products } from '../../products-db/products'

interface ProductInCartProps {
  id: number
  amount: number
}

export function ProductInCart({ id, amount }: ProductInCartProps) {
  const product = products[products.findIndex((item) => item.id === id)]

  return (
    <ProductInCartContainer>
      <img src={product.image} alt="" />
      <div>
        <CoffeeTitle>{product.title}</CoffeeTitle>
        <AmountSection>
          <div>
            <Minus size={16} className="disable" /> {amount} <Plus size={16} />
          </div>
          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </AmountSection>
      </div>
      <strong>R${product.priceInCents / 100}</strong>
    </ProductInCartContainer>
  )
}
