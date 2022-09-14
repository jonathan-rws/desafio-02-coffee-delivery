import { createContext, ReactNode, useEffect, useState } from 'react'

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
  useEffect(() => {
    async function getStorage() {
      const data = await localStorage.getItem('deliveryCOffeeCartItems')
      if (data) {
        setCart(JSON.parse(data))
      }
    }
    getStorage()
  }, [])
  async function addToCart(id: number, amount: number) {
    let newCart = []
    if (!cart) {
      newCart = [{ id, amount }]
    } else {
      const cartIndex = cart.findIndex((item) => item.id === id)
      if (cartIndex !== -1) {
        const cartArray = cart.map((item) => {
          return item.id === id
            ? { id: item.id, amount: item.amount + amount }
            : item
        })
        newCart = cartArray
      } else {
        newCart = [...cart, { id, amount }]
      }
    }
    localStorage.setItem('deliveryCOffeeCartItems', JSON.stringify(newCart))
    setCart(newCart)
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
