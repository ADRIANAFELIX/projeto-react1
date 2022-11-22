import { Subtitle } from './Subtitle'
import { Text } from './Text'
import { Image } from './Image'
import foto from '../assets/adrianafelix.png'
import './styles/bio.css'

export function Bio() {
  return(
    <div className="bio_container">
      <Image link={foto} />
      <div className="bio_text">
        <Subtitle texto="Adriana" />
        <Text content="Tenho 38 anos e estou fazendo transição de carreira. Atualmente formada em Administração e trabalhando na área." />
      </div>
    </div>
  )
}