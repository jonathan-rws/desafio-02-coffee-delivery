import { MapPinLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { cepApi } from '../../services/cepApi'
import {
  DeliveryAddressContainer,
  DeliveryAddressContent,
  DivForm,
} from './styles'

interface DeliveryAdressProps {
  currentCep: string
  setCurrentCep: (e: string) => void
  street: string
  setStreet: (e: string) => void
  district: string
  setDistrict: (e: string) => void
  city: string
  setCity: (e: string) => void
  state: string
  setState: (e: string) => void
  number: string
  setNumber: (e: string) => void
}

export function DevileveryAdress(props: DeliveryAdressProps) {
  const [streetInputIsActive, setStreetInputIsActive] = useState(false)
  const [districtInputIsActive, setDistrictInputIsActive] = useState(false)
  const [cityInputIsActive, setCityInputIsActive] = useState(false)
  const [stateInputIsActive, setStateInputIsActive] = useState(false)

  async function getAdress() {
    const { data } = await cepApi(`${props.currentCep}/json`)
    props.setCity(data.localidade)
    props.setStreet(data.logradouro)
    props.setDistrict(data.bairro)
    props.setState(data.uf)
    if (data.logradouro) {
      setStreetInputIsActive(true)
    }
    if (data.bairro) {
      setDistrictInputIsActive(true)
    }
    if (data.localidade) {
      setCityInputIsActive(true)
    }
    if (data.uf) {
      setStateInputIsActive(true)
    }
  }

  useEffect(() => {
    if (props.currentCep.length === 8) {
      getAdress()
    }
    if (props.currentCep.length < 8) {
      props.setCity('')
      props.setStreet('')
      props.setDistrict('')
      props.setState('')
      setStreetInputIsActive(false)
      setDistrictInputIsActive(false)
      setCityInputIsActive(false)
      setStateInputIsActive(false)
    }
  }, [props.currentCep])
  return (
    <DeliveryAddressContainer>
      <DeliveryAddressContent>
        <header>
          <MapPinLine size={22} />
          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </header>
        <input
          required
          type="text"
          placeholder="CEP"
          className="addressCEP"
          value={props.currentCep}
          onChange={(e) => props.setCurrentCep(e.target.value)}
          maxLength={8}
        />
        <input
          required
          disabled={streetInputIsActive}
          type="text"
          placeholder="Rua"
          value={props.street}
          onChange={(e) => props.setStreet(e.target.value)}
        />
        <DivForm>
          <input
            required
            type="text"
            placeholder="Número"
            className="addressNumber"
            onChange={(e) => props.setNumber(e.target.value)}
          />
          <input type="text" placeholder="Complemento" />
        </DivForm>
        <DivForm>
          <input
            required
            disabled={districtInputIsActive}
            type="text"
            placeholder="Bairro"
            className="addressDistric"
            value={props.district}
            onChange={(e) => props.setDistrict(e.target.value)}
          />
          <input
            required
            disabled={cityInputIsActive}
            type="text"
            placeholder="Cidade"
            className="addressCity"
            value={props.city}
            onChange={(e) => props.setCity(e.target.value)}
          />
          <input
            required
            disabled={stateInputIsActive}
            type="text"
            placeholder="UF"
            className="addressUF"
            value={props.state}
            onChange={(e) => props.setState(e.target.value)}
          />
        </DivForm>
      </DeliveryAddressContent>
    </DeliveryAddressContainer>
  )
}
