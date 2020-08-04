import Page from '../components/Page'
import Container from '../components/Container'
import Title from '../components/Title'
import Info from '../components/Info'
import Social from '../components/Social'

const socialLinks = [{
  id: 1,
  text: "VK",
  href: "#"
}, {
  id: 2,
  text: "FB",
  href: "#"
}, {
  id: 3,
  text: "YT",
  href: "#"
}]

export default function Home() {
  return (
    <Page>
      <Container>
        <Title>Кодим с Reactcoder-ом</Title>
        <Info>
          <p>Канал представляет собой коротенькие видеоролики для обучения разработке на React.js и Node.js.</p>
        </Info>
        <Social items={socialLinks} />
      </Container>
    </Page>
  )
}
