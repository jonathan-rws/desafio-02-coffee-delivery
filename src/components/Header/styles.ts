import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
  }
`
export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.purple};
  line-height: 1.3;
`

export const Cart = styled.button`
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.yellow};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  div {
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: -2.375rem;
    margin-right: -2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.background};
    font-weight: bold;
    font-size: 0.75rem;
  }
`
