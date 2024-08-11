import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Container from 'react-bootstrap/Container';


export default function Layout({ children }) {
  return (
    <Container>
      <Header/>
      <main>{children}</main>
      <Footer></Footer>
    </Container>
  )
}