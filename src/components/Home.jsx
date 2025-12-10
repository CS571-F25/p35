import { Container, Row, Col, Button } from 'react-bootstrap';
import NewsCard from './NewsCard';

function Home() {
  const newsItems = [
    {
      title: "Spring Tournament Success!",
      date: "March 15, 2024",
      content: "Our team placed 2nd in the regional spring tournament. Great job everyone!",
      image: "https://via.placeholder.com/400x200?text=Tournament+Photo"
    },
    {
      title: "New Practice Schedule",
      date: "March 10, 2024",
      content: "Practice times have been updated for the spring semester. Check the Events page for details.",
      image: "https://via.placeholder.com/400x200?text=Practice+Schedule"
    },
    {
      title: "Welcome New Members!",
      date: "March 1, 2024",
      content: "We're excited to welcome 15 new members to the club this semester!",
      image: "https://via.placeholder.com/400x200?text=Welcome"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container fluid>
          <h1 className="display-4">Welcome to UW-Madison Club Tennis</h1>
          <p className="lead">Join us for competitive play, skill development, and community!</p>
          <Button variant="light" size="lg" href="/events">View Upcoming Events</Button>
        </Container>
      </div>

      {/* Featured Image Section */}
      <Container fluid className="my-5">
        <Row>
          <Col>
            <img
              src="/p35/images/WiscoTeamPhoto.jpg"
              alt="UW-Madison Club Tennis team group photo at practice"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* News Section */}
      <Container fluid className="my-5">
        <h2 className="mb-4">Latest News</h2>
        <Row>
          {newsItems.map((news, index) => (
            <Col md={4} key={index}>
              <NewsCard
                title={news.title}
                date={news.date}
                content={news.content}
                image={news.image}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick Info Section */}
      <Container fluid className="my-5">
        <Row>
          <Col md={6}>
            <h3>About Our Club</h3>
            <p>
              UW-Madison Club Tennis is a student-run organization dedicated to
              providing competitive and recreational tennis opportunities for all skill levels.
            </p>
          </Col>
          <Col md={6}>
            <h3>Get Involved</h3>
            <p>
              Whether you're a seasoned player or just starting out, we welcome everyone!
              Check out our events page for tryout and practice information.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
