import { Container, LoginContainer, LostPass, Create } from './styles';

export default function Login() {
  return (
    <Container>
      <h2>Criar conta Nintendo</h2>
      <LoginContainer>
        <form>
          <input type='text' placeholder='Endereço de e-mail' required />
          <input type='password' placeholder='Senha' required />

          <LostPass>
            <a href='!#'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </LostPass>
        </form>

        <Create>
          <span>Ainda não possui conta?</span>
          <a href='/register'>Criar uma conta Nintendo</a>
        </Create>
      </LoginContainer>
    </Container>
  )
}