import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import { Container, Social } from './styles';

export default function Footer() {
  return (
    <Container>
      <Social>
        <a href='https://pt-br.facebook.com/SamsungBrasil'><FaFacebookSquare /></a>
           <a href='https://www.youtube.com/samsungbrasil'><FaYoutubeSquare /></a>
      </Social>
      <span>© 2021 JWM(Produtos Eletronicos). Os EletroEletronicos são produtos nacionais de fabricação brasileira.</span>
      <span> Com sua loja fisica localizada em Marabá-PA, Brasil</span>
    </Container>
  )
}