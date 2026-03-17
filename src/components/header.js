import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#beranda">Karyasoft</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
            <Nav.Link href="#services">Layanan</Nav.Link>
            <Nav.Link href="#portofolio">Portofolio</Nav.Link>
            <Nav.Link href="#tim">Tim</Nav.Link>
            <Nav.Link href="#testimoni">Testimoni</Nav.Link>
            <Nav.Link href="#harga">Harga</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#hubungi-kami">Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;