import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  Description,
  Footer,
  ProductContainer,
  SelectAmountInput,
  Title,
  TypeTag,
} from './styles'

import coffeeImg from '../../assets/coffeeImages/expresso-tradicional.png'

export function Product() {
  return (
    <ProductContainer>
      <img src={coffeeImg} alt="" />
      <TypeTag>TRADICIONAL</TypeTag>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Footer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <SelectAmountInput>
          <Minus size={14} />
          <span>1</span>
          <Plus size={14} />
        </SelectAmountInput>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </Footer>
    </ProductContainer>
  )
}
