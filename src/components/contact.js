import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="hubungi-kami" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Hubungi Kami</h2>
          <div className="subtitle">terhubung dengan kami</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Masukkan nama anda" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Masukkan email anda" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Masukkan nomor telp anda" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Masukkan pesan anda" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Kirim</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe
        title='maps'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63298.61637188583!2d112.66562138826781!3d-7.447153587015802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1343346658b%3A0x96cbcb91139dab36!2sSidoarjo%2C%20Kec.%20Sidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1773580344098!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              karyasoft@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +62 877 5272 9835
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Sidoarjo, Jawa Timur
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;