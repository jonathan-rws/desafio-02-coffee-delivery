import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerContainer, Content, Footer, Icon } from './styles'

import coffeeBanner from '../../assets/coffeeBanner.png'

export function Banner() {
  return (
    <BannerContainer>
      <Content>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Footer>
          <div>
            <Icon color="yellowDark">
              <ShoppingCart weight="fill" size={16} />
            </Icon>
            <span>Compra Simples e segura</span>
          </div>
          <div>
            <Icon color="gray">
              <Package weight="fill" size={16} />
            </Icon>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Icon color="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Icon color="purple">
              <Coffee weight="fill" size={16} />
            </Icon>
            <span>O café fresquinho até você</span>
          </div>
        </Footer>
      </Content>
      <img src={coffeeBanner} alt="" />
    </BannerContainer>
  )
}
