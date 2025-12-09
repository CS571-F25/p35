import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container fluid>
        <Row>
          <Col md={4}>
            <h2>UW-Madison Club Tennis</h2>
            <p>Building community through tennis</p>
          </Col>
          <Col md={4}>
            <h2>Quick Links</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/events" className="text-light text-decoration-none">Events</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Connect With Us</h2>
            <p>Follow us on social media for updates</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 UW-Madison Club Tennis. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
