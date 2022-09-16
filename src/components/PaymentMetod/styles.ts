import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  header {
    display: flex;
    flex-direction: row;
    svg {
      color: ${(props) => props.theme.purple};
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
`

interface MethodPaymentSelectionProps {
  method?: 'money' | 'debit' | 'credit' | null
}
export const MethodPaymentSelection = styled.div<MethodPaymentSelectionProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  a {
    padding-left: 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 3rem;
    background: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 8px;

    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
    cursor: pointer;
    &.${(props) => props.method} {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
