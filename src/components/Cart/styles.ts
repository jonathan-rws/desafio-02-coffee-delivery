import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`
export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
      & + span {
        font-size: 1rem;
      }
    }
  }
  strong {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.yellow};
  padding: 0.75rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
