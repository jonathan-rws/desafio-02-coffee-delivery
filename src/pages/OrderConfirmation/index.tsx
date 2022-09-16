import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ConfirmationContainer,
  ConfirmationContent,
  Icon,
  InformationContainer,
  OrderConfirmationContainer,
} from './styles'

import motoboyImg from '../../assets/motoboy.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'

export function OrderConfirmation() {
  const { order } = useContext(CartContext)
  return (
    <OrderConfirmationContainer>
      <ConfirmationContainer>
        <strong>Uhu! Pedido confirmado com sucesso</strong>
        <span>Agora é só aguardar que lofo o café chegará até você</span>

        <ConfirmationContent>
          <div>
            <Icon color="purple">
              <MapPin color="#FFFFFF" size={16} weight="fill" />
            </Icon>
            <InformationContainer>
              <span>
                Entrega em{' '}
                <strong>
                  {order?.street}, {order?.number}
                </strong>
              </span>
              <span>
                {`${order?.district} - ${order?.city} - ${order?.state}`}
              </span>
            </InformationContainer>
          </div>
          <div>
            <Icon color="yellow">
              <Timer color="#FFFFFF" size={16} weight="fill" />
            </Icon>
            <InformationContainer>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </InformationContainer>
          </div>
          <div>
            <Icon color="yellowDark">
              <CurrencyDollar color="#FFFFFF" size={16} weight="fill" />
            </Icon>
            <InformationContainer>
              <span>Pagamento na entrega</span>
              <strong>{order?.method}</strong>
            </InformationContainer>
          </div>
        </ConfirmationContent>
      </ConfirmationContainer>
      <img src={motoboyImg} alt="" />
    </OrderConfirmationContainer>
  )
}
