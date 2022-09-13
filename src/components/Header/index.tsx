import { Cart, HeaderContainer, Locale } from './styles'
import { Link } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'

export function Header() {
  const { cart } = useContext(CartContext)
  const AmountItensInCart = cart?.reduce((acc, value) => {
    return acc + value.amount
  }, 0)
  return (
    <HeaderContainer>
      <Link to="./">
        <img src={logoImg} alt="Coffe Delivery Logo" />
      </Link>
      <div className="cart-info">
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Blumenau, SC</span>
        </Locale>
        <Link to={'/checkout'}>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            <div>
              <span>{AmountItensInCart || 0}</span>
            </div>
          </Cart>
        </Link>
      </div>
    </HeaderContainer>
  )
}
