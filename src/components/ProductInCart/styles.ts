import styled from 'styled-components'

export const ProductInCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
  strong {
    margin-left: 2rem;
  }
`

export const CoffeeTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const AmountSection = styled.div`
  display: flex;
  margin-top: 0.5rem;
  div,
  button {
    height: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 8px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.purple};
      &.disable {
        color: ${(props) => props.theme['base-text']};
        cursor: not-allowed;
      }
    }
  }
  button {
    margin-left: 0.5rem;
  }
`
