import { MapPinLine } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { cepApi } from '../../services/cepApi'
import {
  DeliveryAddressContainer,
  DeliveryAddressContent,
  DivForm,
} from './styles'

export function DevileveryAdress() {
  const [currentCep, setCurrentCep] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [streetInputIsActive, setStreetInputIsActive] = useState(false)
  const [districtInputIsActive, setDistrictInputIsActive] = useState(false)
  const [cityInputIsActive, setCityInputIsActive] = useState(false)
  const [stateInputIsActive, setStateInputIsActive] = useState(false)

  async function getAdress() {
    const { data } = await cepApi(`${currentCep}/json`)
    setCity(data.localidade)
    setStreet(data.logradouro)
    setDistrict(data.bairro)
    setState(data.uf)
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
    if (currentCep.length === 8) {
      getAdress()
    }
    if (currentCep.length < 8) {
      setCity('')
      setStreet('')
      setDistrict('')
      setState('')
      setStreetInputIsActive(false)
      setDistrictInputIsActive(false)
      setCityInputIsActive(false)
      setStateInputIsActive(false)
    }
  }, [currentCep])
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
          type="text"
          placeholder="CEP"
          className="addressCEP"
          value={currentCep}
          onChange={(e) => setCurrentCep(e.target.value)}
          maxLength={8}
        />
        <input
          disabled={streetInputIsActive}
          type="text"
          placeholder="Rua"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <DivForm>
          <input type="text" placeholder="Número" className="addressNumber" />
          <input type="text" placeholder="Complemento" />
        </DivForm>
        <DivForm>
          <input
            disabled={districtInputIsActive}
            type="text"
            placeholder="Bairro"
            className="addressDistric"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <input
            disabled={cityInputIsActive}
            type="text"
            placeholder="Cidade"
            className="addressCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            disabled={stateInputIsActive}
            type="text"
            placeholder="UF"
            className="addressUF"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </DivForm>
      </DeliveryAddressContent>
    </DeliveryAddressContainer>
  )
}
