import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'
import {
  CartButton,
  Description,
  Footer,
  ProductContainer,
  SelectAmountInput,
  Title,
  TypeTag,
} from './styles'

interface ProductProps {
  id: number
  title: string
  tags: string[]
  priceInCents: number
  description: string
  inventory: number
  image: any
}

export function Product({
  id,
  title,
  tags,
  priceInCents,
  description,
  inventory,
  image,
}: ProductProps) {
  const [productAmount, setProductAmount] = useState(1)
  const { addToCart } = useContext(CartContext)
  function handleIncrementProductAmount() {
    if (inventory > productAmount) {
      setProductAmount((state) => state + 1)
    }
  }
  function handleDecrementProductAmount() {
    if (productAmount > 1) {
      setProductAmount((state) => state - 1)
    }
  }

  function handleAddTocart() {
    addToCart(id, productAmount)
    setProductAmount(1)
  }

  return (
    <ProductContainer>
      <img src={image} alt="" />

      {tags.map((tag) => (
        <TypeTag key={tag}>{tag}</TypeTag>
      ))}

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <span>
          R$ <strong>{priceInCents / 100}</strong>
        </span>
        <SelectAmountInput>
          <button onClick={handleDecrementProductAmount}>
            <Minus size={14} weight="bold" />
          </button>
          <span>{productAmount}</span>
          <button onClick={handleIncrementProductAmount}>
            <Plus size={14} weight="bold" />
          </button>
        </SelectAmountInput>
        <CartButton onClick={handleAddTocart}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </Footer>
    </ProductContainer>
  )
}
