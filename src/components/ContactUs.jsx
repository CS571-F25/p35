import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Contact Us</h1>

      <Row>
        {/* Contact Form */}
        <Col md={8}>
          <Card>
            <Card.Body>
              <h3 className="mb-3">Send us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@wisc.edu"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <h4>Contact Information</h4>
              <hr />
              <p>
                <strong>Email:</strong><br />
                uwmadison.clubtennis@wisc.edu
              </p>
              <p>
                <strong>Phone:</strong><br />
                (608) 555-TNNS
              </p>
              <p>
                <strong>Location:</strong><br />
                Nielsen Tennis Stadium<br />
                University of Wisconsin-Madison<br />
                Madison, WI 53706
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <h4>Office Hours</h4>
              <hr />
              <p>
                <strong>During Semester:</strong><br />
                Monday - Friday<br />
                3:00 PM - 5:00 PM
              </p>
              <p className="mb-0">
                <strong>Summer Break:</strong><br />
                By appointment only
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>Social Media</h4>
              <hr />
              <p className="mb-1">
                <strong>Instagram:</strong> @uwclubtennis
              </p>
              <p className="mb-1">
                <strong>Facebook:</strong> UW Club Tennis
              </p>
              <p className="mb-0">
                <strong>Twitter:</strong> @UWClubTennis
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Map placeholder */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h3 className="mb-3">Find Us</h3>
              <img
                src="https://via.placeholder.com/1000x400?text=Map+Location+-+Add+Your+Own"
                alt="Map Placeholder"
                className="img-fluid rounded"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
