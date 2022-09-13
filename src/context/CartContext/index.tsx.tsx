import { createContext, ReactNode, useState } from 'react'

interface CartItem {
  id: number
  amount: number
}

interface CartContextProps {
  addToCart: (id: number, amount: number) => void
  cart: CartItem[] | null
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[] | null>(null)

  function addToCart(id: number, amount: number) {
    if (cart) {
      const newCart = [...cart, { id, amount }]
      setCart(newCart)
    } else {
      setCart([{ id, amount }])
    }
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
