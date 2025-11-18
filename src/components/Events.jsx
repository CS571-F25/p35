import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import EventCard from './EventCard';

function Events() {
  const practices = [
    {
      title: "Weekly Practice Session",
      date: "Every Tuesday & Thursday",
      time: "6:00 PM - 8:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "practice",
      description: "Open to all members. Bring your racket and water!"
    },
    {
      title: "Advanced Training",
      date: "Every Saturday",
      time: "9:00 AM - 11:00 AM",
      location: "Nielsen Tennis Stadium",
      type: "practice",
      description: "Advanced drills and competitive play for experienced players."
    }
  ];

  const tryouts = [
    {
      title: "Spring Semester Tryouts",
      date: "April 1, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "tryout",
      description: "Competitive team tryouts for the spring season. All skill levels encouraged to attend!"
    },
    {
      title: "Fall Semester Tryouts",
      date: "September 15, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "tryout",
      description: "Join the competitive team for the fall season."
    }
  ];

  const tournaments = [
    {
      title: "Big Ten Club Tennis Championship",
      date: "April 20-21, 2024",
      time: "All Day",
      location: "University of Illinois",
      type: "tournament",
      description: "Annual championship tournament featuring Big Ten club teams."
    },
    {
      title: "Wisconsin Intercollegiate Tournament",
      date: "May 5, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Madison Tennis Center",
      type: "tournament",
      description: "Compete against other Wisconsin collegiate clubs."
    },
    {
      title: "Midwest Regional Championships",
      date: "May 18-19, 2024",
      time: "All Day",
      location: "Chicago, IL",
      type: "tournament",
      description: "Regional championship qualifying event for nationals."
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">Events</h1>

      <Tabs defaultActiveKey="all" className="mb-4">
        <Tab eventKey="all" title="All Events">
          <Row>
            <Col>
              <h3 className="mb-3">Practices</h3>
              {practices.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}

              <h3 className="mb-3 mt-4">Tryouts</h3>
              {tryouts.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}

              <h3 className="mb-3 mt-4">Tournaments</h3>
              {tournaments.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="practices" title="Practices">
          <Row>
            <Col>
              {practices.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="tryouts" title="Tryouts">
          <Row>
            <Col>
              {tryouts.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="tournaments" title="Tournaments">
          <Row>
            <Col>
              {tournaments.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </Col>
          </Row>
        </Tab>
      </Tabs>

      {/* Event Photo Gallery */}
      <Row className="mt-5">
        <Col>
          <h3 className="mb-3">Event Photos</h3>
          <Row>
            <Col md={4} className="mb-3">
              <img
                src="https://via.placeholder.com/400x300?text=Tournament+Action"
                alt="Tournament Photo"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={4} className="mb-3">
              <img
                src="https://via.placeholder.com/400x300?text=Practice+Session"
                alt="Practice Photo"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={4} className="mb-3">
              <img
                src="https://via.placeholder.com/400x300?text=Team+Competition"
                alt="Competition Photo"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
