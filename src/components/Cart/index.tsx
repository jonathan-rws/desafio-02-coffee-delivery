import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'
import { ProductInCart } from '../ProductInCart'
import { products } from '../../products-db/products'

import { CartContainer, ConfirmButton, TotalContainer } from './styles'
import { Spinner } from 'phosphor-react'

interface CartProps {
  isLoading: boolean
}

export function Cart({ isLoading }: CartProps) {
  const { cart } = useContext(CartContext)
  const totalPrice = cart?.reduce((acc, value) => {
    const product = products[products.findIndex((item) => item.id === value.id)]
    return product.priceInCents * value.amount + acc
  }, 0)
  console.log(cart?.length)
  return (
    <CartContainer>
      {cart?.map((item) => {
        return <ProductInCart key={item.id} id={item.id} amount={item.amount} />
      })}

      <TotalContainer>
        <div>
          <span>Total de intens</span>
          <span>R$ {totalPrice ? totalPrice / 100 : 0}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{cart?.length === 0 ? 'R$ 0.00' : 'R$ 3.50'}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{totalPrice ? totalPrice / 100 + 3.5 : 0}</strong>
        </div>
      </TotalContainer>
      <ConfirmButton type="submit">
        {isLoading ? <Spinner size={30} /> : 'CONFIRMAR PEDIDO'}
      </ConfirmButton>
    </CartContainer>
  )
}
