import { FormEvent, useContext, useState } from 'react'
import { Cart } from '../../components/Cart'
import { DevileveryAdress } from '../../components/DeliveryAdress'
import { PaymentMethod } from '../../components/PaymentMetod'
import { CartContext } from '../../context/CartContext/index.tsx'
import { useNavigate } from 'react-router-dom'

import {
  CheckoutContainer,
  LeftContainer,
  RighContainer,
  TextSubtitle,
} from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const { addOrder, cart, clearCart } = useContext(CartContext)

  const [currentCep, setCurrentCep] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [number, setNumber] = useState('')
  const [method, setMethod] = useState<'money' | 'debit' | 'credit' | null>(
    null,
  )
  const [loading, setLoading] = useState(false)
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    if (!currentCep && !street && !number && !district) {
      alert('Preencha o endereço corretamente')
      return
    }
    if (!method) {
      alert('Selecione uma forma de pagamento')
      return
    }
    if (cart?.length === 0) {
      alert('Adicione um produto ao carrinho')
      return
    }
    addOrder({
      id: 'blalbal',
      city,
      state,
      district,
      street,
      method,
      number,
    })
    setTimeout(() => {
      navigate('/orderconfirmation')
      setLoading(false)
      clearCart()
    }, 2000)

    // setLoading(true)
    //
    // if (method && state && city && street && currentCep) {

    // } else if (!method) {
    //   alert('Selecione o método de pagamento')
    // }
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit}>
      <LeftContainer>
        <TextSubtitle>Complete seu pedido</TextSubtitle>
        <DevileveryAdress
          currentCep={currentCep}
          street={street}
          district={district}
          city={city}
          state={state}
          number={number}
          setCurrentCep={(e: string) => setCurrentCep(e)}
          setStreet={(e: string) => setStreet(e)}
          setDistrict={(e: string) => setDistrict(e)}
          setCity={(e: string) => setCity(e)}
          setState={(e: string) => setState(e)}
          setNumber={(e: string) => setNumber(e)}
        />
        <PaymentMethod
          setMethod={(event: 'money' | 'debit' | 'credit') => setMethod(event)}
          method={method}
        />
      </LeftContainer>
      <RighContainer>
        <TextSubtitle>Cafés selecionados</TextSubtitle>
        <Cart isLoading={loading} />
      </RighContainer>
    </CheckoutContainer>
  )
}
