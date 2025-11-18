import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  const teamMembers = [
    {
      name: "President",
      role: "Club President",
      image: "https://via.placeholder.com/200x200?text=President"
    },
    {
      name: "Vice President",
      role: "Vice President",
      image: "https://via.placeholder.com/200x200?text=VP"
    },
    {
      name: "Treasurer",
      role: "Treasurer",
      image: "https://via.placeholder.com/200x200?text=Treasurer"
    },
    {
      name: "Events Coordinator",
      role: "Events Coordinator",
      image: "https://via.placeholder.com/200x200?text=Events"
    }
  ];

  return (
    <Container fluid className="my-5">
      <h1 className="mb-4">About UW-Madison Club Tennis</h1>

      {/* Mission Section */}
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Body>
              <h3>Our Mission</h3>
              <p>
                UW-Madison Club Tennis is dedicated to fostering a community of tennis
                enthusiasts who share a passion for the sport. We provide opportunities
                for competitive play, skill development, and social connection regardless
                of experience level.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Photo Section */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-3">Team Photo</h3>
          <img
            src="https://via.placeholder.com/1000x600?text=Team+Group+Photo+-+Add+Your+Own"
            alt="Team Group Photo Placeholder"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      {/* What We Offer Section */}
      <Row className="mb-5">
        <Col md={6}>
          <h3>What We Offer</h3>
          <ul>
            <li>Weekly practice sessions for all skill levels</li>
            <li>Competitive tournament opportunities</li>
            <li>Professional coaching and training</li>
            <li>Social events and team bonding</li>
            <li>Access to university tennis facilities</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>Who Can Join</h3>
          <p>
            We welcome all UW-Madison students, regardless of skill level!
            Whether you're a complete beginner or have years of experience,
            there's a place for you on our team.
          </p>
          <p>
            <strong>No tryouts required for recreational members!</strong>
          </p>
          <p>
            Competitive team positions are available through tryouts held at
            the beginning of each semester.
          </p>
        </Col>
      </Row>

      {/* Leadership Team */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-4">Leadership Team</h3>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={3} key={index} className="mb-3">
                <Card className="text-center">
                  <Card.Img variant="top" src={member.image} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text className="text-muted">{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* History Section */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3>Our History</h3>
              <p>
                Founded in [Year], UW-Madison Club Tennis has grown from a small
                group of tennis enthusiasts to one of the most active club sports
                on campus. Over the years, we've competed in numerous regional
                and national tournaments, building a tradition of excellence both
                on and off the court.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
