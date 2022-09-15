import { Minus, Plus, ShoppingCart, Spinner } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext/index.tsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    addToCart(id, productAmount)
    setTimeout(() => setIsLoading(false), 1000)
    setProductAmount(1)
    toast('produto adicionado ao carrinho')
  }

  return (
    <ProductContainer>
      <ToastContainer />
      <img src={image} alt="" />
      <div>
        {tags.map((tag) => (
          <TypeTag key={tag}>{tag}</TypeTag>
        ))}
      </div>

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
          {isLoading ? (
            <Spinner size={22} weight="fill" className="loading" />
          ) : (
            <ShoppingCart size={22} weight="fill" />
          )}
        </CartButton>
      </Footer>
    </ProductContainer>
  )
}
