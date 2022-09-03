import { Cart, HeaderContainer, Locale } from './styles'
import { Link } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

export function Header() {
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
              <span>2</span>
            </div>
          </Cart>
        </Link>
      </div>
    </HeaderContainer>
  )
}
