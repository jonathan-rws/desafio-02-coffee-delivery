import { Cart } from '../../components/Cart'
import { DevileveryAdress } from '../../components/DeliveryAdress'
import { PaymentMethod } from '../../components/PaymentMetod'

import {
  CheckoutContainer,
  LeftContainer,
  RighContainer,
  TextSubtitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <LeftContainer>
        <TextSubtitle>Complete seu pedido</TextSubtitle>
        <DevileveryAdress />
        <PaymentMethod />
      </LeftContainer>
      <RighContainer>
        <TextSubtitle>Cafés selecionados</TextSubtitle>
        <Cart />
      </RighContainer>
    </CheckoutContainer>
  )
}
