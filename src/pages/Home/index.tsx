import { Banner } from '../../components/Banner'
import { Showcase } from '../../components/Showcase'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Showcase />
    </HomeContainer>
  )
}
