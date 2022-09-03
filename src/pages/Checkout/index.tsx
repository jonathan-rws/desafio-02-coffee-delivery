import { MapPinLine, Minus, Plus } from 'phosphor-react'
import {
  CheckoutContainer,
  DeliveryAddressContainer,
  DeliveryAddressContent,
  DivForm,
  TextSubtitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <DeliveryAddressContainer>
          <TextSubtitle>Complete seu pedido</TextSubtitle>
          <DeliveryAddressContent>
            <header>
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </header>
            <input type="text" placeholder="CEP" className="addressCEP" />
            <input type="text" placeholder="Rua" />
            <DivForm>
              <input
                type="text"
                placeholder="Número"
                className="addressNumber"
              />
              <input type="text" placeholder="Complemento" />
            </DivForm>
            <DivForm>
              <input
                type="text"
                placeholder="Bairro"
                className="addressDistric"
              />
              <input type="text" placeholder="Cidade" className="addressCity" />
              <input type="text" placeholder="UF" className="addressUF" />
            </DivForm>
          </DeliveryAddressContent>
        </DeliveryAddressContainer>
        <div>
          <TextSubtitle>Cafés selecionados</TextSubtitle>
          <section>
            <div>
              <img src="" alt="" />
              <div>
                <strong>Expresso Tradicional</strong>
                <div>
                  <div>
                    <Minus />
                    <span>2</span>
                    <Plus />
                  </div>
                </div>
                <button> Remover</button>
              </div>
              <strong> R$ 9,90</strong>
            </div>
          </section>
        </div>
      </form>
    </CheckoutContainer>
  )
}
