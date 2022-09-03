import { Product } from '../Product'
import { ShowcaseContainer, ShowcaseContent } from './styles'

export function Showcase() {
  return (
    <ShowcaseContainer>
      <h1>Nossos cafés</h1>
      <ShowcaseContent>
        <Product />
        <Product />
        <Product />
        <Product />
      </ShowcaseContent>
    </ShowcaseContainer>
  )
}
