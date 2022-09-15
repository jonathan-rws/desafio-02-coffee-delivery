import styled from 'styled-components'

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IconProps {
  color: 'yellowDark' | 'yellow' | 'purple'
}
export const OrderConfirmationContainer = styled.main`
  max-width: 70rem;
  display: flex;
  margin: 7rem auto;
  gap: 1rem;
  align-items: flex-end;
`
export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  > strong {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 3rem;
  }
  > span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmationContent = styled.div`
  margin-top: 2.5rem;
  position: relative;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    align-items: center;
  }
`
export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
  strong {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
