import styled from 'styled-components'

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IconProps {
  color: 'yellowDark' | 'yellow' | 'gray' | 'purple'
}

export const BannerContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  strong {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
  > img {
    width: 29rem;
    height: 22.5rem;
  }
`
export const Content = styled.section`
  width: 100%;
`

export const Footer = styled.footer`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 1.25rem;
  > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`
export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};
`
