import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`

export const DeliveryAddressContainer = styled.div`
  width: 57%;
`
export const TextSubtitle = styled.h1`
  font-size: 1.125rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`
export const DeliveryAddressContent = styled.section`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  header {
    display: flex;
    flex-direction: row;
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
    > div {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
      strong {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.3;
      }
      span {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
  input {
    height: 2.625rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.875rem;
    line-height: 1.3;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }
  }
  input.addressCEP,
  input.addressNumber,
  input.addressDistric {
    width: 12.75rem;
  }
  input.addressUF {
    width: 3.75rem;
  }
`

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  gap: 0.875rem;
  .addressCity {
    flex: 1;
  }
`
