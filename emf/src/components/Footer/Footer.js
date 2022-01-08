import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import { Container, Social } from './styles';

export default function Footer() {
  return (
    <Container>
      <Social>
        <a href='https://www.facebook.com/NintendoBrazil'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/nintendo_brasil'><FaInstagramSquare /></a>
        <a href='https://twitter.com/NintendoAmerica'><FaTwitterSquare /></a>
        <a href='https://www.youtube.com/nintendo'><FaYoutubeSquare /></a>
      </Social>
      <span>© 2021 Nintendo. Os jogos são propriedade de seus respectivos donos.</span>
      <span>Nintendo of America Inc. | A sede está localizada em Redmond, Washington (EUA)</span>
    </Container>
  )
}