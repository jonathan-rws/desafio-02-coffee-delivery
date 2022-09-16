import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartItem {
  id: number
  amount: number
}

interface Order {
  id: string
  street: string
  number: string
  city: string
  state: string
  district: string
  complement?: string
  method: 'credit' | 'debit' | 'money' | null
}
interface CartContextProps {
  cart: CartItem[] | null
  clearCart: () => void
  addToCart: (id: number, amount: number) => void
  addOrder: (args: Order) => void
  removeFromCart: (id: number) => void
  decrementItemFromCart: (id: number) => void
  incrementItemFromCart: (id: number) => void
  order: Order | null
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[] | null>(null)
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    async function getStorage() {
      const data = await localStorage.getItem('deliveryCoffeeCartItems')
      if (data) {
        setCart(JSON.parse(data))
      }
    }
    getStorage()
  }, [])

  function addOrder({
    id,
    street,
    number,
    city,
    state,
    district,
    method,
    complement,
  }: Order) {
    setOrder({ id, street, number, city, state, district, complement, method })
  }

  function addToCart(id: number, amount: number) {
    let newCart = []
    if (!cart) {
      newCart = [{ id, amount }]
    } else {
      const cartIndex = cart.findIndex((item) => item.id === id)
      if (cartIndex !== -1) {
        newCart = cart.map((item) => {
          return item.id === id
            ? { id: item.id, amount: item.amount + amount }
            : item
        })
      } else {
        newCart = [...cart, { id, amount }]
      }
    }
    localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(newCart))
    setCart(newCart)
  }

  function removeFromCart(id: number) {
    const newCart = cart?.filter((item) => item.id !== id)
    if (newCart) {
      setCart(newCart)
      localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(newCart))
    } else {
      setCart(null)
      localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(null))
    }
  }

  function decrementItemFromCart(id: number) {
    const newCart = cart?.map((item) =>
      item.id !== id ? item : { id, amount: item.amount - 1 },
    )
    newCart && setCart(newCart)
    localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(newCart))
  }

  function incrementItemFromCart(id: number) {
    const newCart = cart?.map((item) =>
      item.id !== id ? item : { id, amount: item.amount + 1 },
    )
    newCart && setCart(newCart)
    localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(newCart))
  }

  function clearCart() {
    setCart(null)
    localStorage.setItem('deliveryCoffeeCartItems', JSON.stringify(null))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decrementItemFromCart,
        incrementItemFromCart,
        order,
        addOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
