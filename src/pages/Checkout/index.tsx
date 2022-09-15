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
  const { addOrder } = useContext(CartContext)

  const [currentCep, setCurrentCep] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [number, setNumber] = useState('')
  const [payment, setPayment] = useState('')
  const [loading, setLoading] = useState(false)
  function handleSubmit(e: FormEvent) {
    setLoading(true)
    e.preventDefault()
    addOrder({
      id: 'blalbal',
      city,
      state,
      district,
      street,
      payment,
      number,
    })
    setTimeout(() => {
      navigate('/orderconfirmation')
      setLoading(false)
    }, 2000)
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
        <PaymentMethod />
      </LeftContainer>
      <RighContainer>
        <TextSubtitle>Cafés selecionados</TextSubtitle>
        <Cart isLoading={loading} />
      </RighContainer>
    </CheckoutContainer>
  )
}
