import { Minus, Plus, Trash } from 'phosphor-react'
import {
  AmountSection,
  CoffeeTitle,
  IncrementAndDecrementBox,
  ProductInCartContainer,
  RemoveButton,
} from './styles'

import { products } from '../../products-db/products'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'

interface ProductInCartProps {
  id: number
  amount: number
}

export function ProductInCart({ id, amount }: ProductInCartProps) {
  const { removeFromCart, incrementItemFromCart, decrementItemFromCart } =
    useContext(CartContext)

  function handleRemoveItemFromCart() {
    removeFromCart(id)
  }
  function handleIncrementItemFromCart() {
    incrementItemFromCart(id)
  }
  function handleDecrementItemFromCart() {
    decrementItemFromCart(id)
  }

  const product = products[products.findIndex((item) => item.id === id)]

  return (
    <ProductInCartContainer>
      <img src={product.image} alt="" />
      <div>
        <CoffeeTitle>{product.title}</CoffeeTitle>
        <AmountSection>
          <IncrementAndDecrementBox>
            <button
              type="button"
              disabled={amount <= 1}
              onClick={handleDecrementItemFromCart}
            >
              <Minus size={16} />
            </button>
            {amount}
            <button type="button" onClick={handleIncrementItemFromCart}>
              <Plus size={16} />
            </button>
          </IncrementAndDecrementBox>
          <RemoveButton type="button" onClick={handleRemoveItemFromCart}>
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </AmountSection>
      </div>
      <strong>R${product.priceInCents / 100}</strong>
    </ProductInCartContainer>
  )
}
