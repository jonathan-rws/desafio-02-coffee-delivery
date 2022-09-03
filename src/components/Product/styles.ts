import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.375rem;
  }
`
export const TypeTag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  margin-top: 1rem;
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`
export const Title = styled.h1`
  margin-top: 1rem;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`
export const Footer = styled.footer`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    strong {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
      line-height: 1.3;
    }
  }
`
export const SelectAmountInput = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
  height: 2.375rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  span {
    color: ${(props) => props.theme['base-title']};
  }
`
export const CartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
  svg {
    color: ${(props) => props.theme['base-card']};
  }
`
