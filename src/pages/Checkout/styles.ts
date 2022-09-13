import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 3rem;
`
export const TextSubtitle = styled.h1`
  font-size: 1.125rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`
export const LeftContainer = styled.div`
  width: 60%;
`
export const RighContainer = styled.div`
  width: 40%;
`
