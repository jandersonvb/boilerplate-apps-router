import { Description, Illustration, Logo, Title, Wrapper } from './styles'

interface MainProps {
  title: string
  description: string
}

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}: MainProps) => {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </Wrapper>
  )
}
