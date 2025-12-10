import { Container, Row, Col, Tabs, Tab, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import EventCard from './EventCard';

function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const practices = [
    {
      title: "Weekly Practice Session",
      date: "Every Tuesday & Thursday",
      dateSort: new Date('2025-01-07'),
      time: "6:00 PM - 8:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "practice",
      description: "Open to all members. Bring your racket and water!"
    },
    {
      title: "Advanced Training",
      date: "Every Saturday",
      dateSort: new Date('2025-01-11'),
      time: "9:00 AM - 11:00 AM",
      location: "Nielsen Tennis Stadium",
      type: "practice",
      description: "Advanced drills and competitive play for experienced players."
    }
  ];

  const tryouts = [
    {
      title: "Spring Semester Tryouts",
      date: "April 1, 2025",
      dateSort: new Date('2025-04-01'),
      time: "5:00 PM - 7:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "tryout",
      description: "Competitive team tryouts for the spring season. All skill levels encouraged to attend!"
    },
    {
      title: "Fall Semester Tryouts",
      date: "September 15, 2025",
      dateSort: new Date('2025-09-15'),
      time: "5:00 PM - 7:00 PM",
      location: "Nielsen Tennis Stadium",
      type: "tryout",
      description: "Join the competitive team for the fall season."
    }
  ];

  const tournaments = [
    {
      title: "Big Ten Club Tennis Championship",
      date: "April 20-21, 2025",
      dateSort: new Date('2025-04-20'),
      time: "All Day",
      location: "University of Illinois",
      type: "tournament",
      description: "Annual championship tournament featuring Big Ten club teams."
    },
    {
      title: "Wisconsin Intercollegiate Tournament",
      date: "May 5, 2025",
      dateSort: new Date('2025-05-05'),
      time: "8:00 AM - 6:00 PM",
      location: "Madison Tennis Center",
      type: "tournament",
      description: "Compete against other Wisconsin collegiate clubs."
    },
    {
      title: "Midwest Regional Championships",
      date: "May 18-19, 2025",
      dateSort: new Date('2025-05-18'),
      time: "All Day",
      location: "Chicago, IL",
      type: "tournament",
      description: "Regional championship qualifying event for nationals."
    }
  ];

  // Combine all events
  const allEvents = [...practices, ...tryouts, ...tournaments];

  // Filter events based on search query
  const filterEvents = (events) => {
    if (!searchQuery.trim()) return events;

    const query = searchQuery.toLowerCase();
    return events.filter(event =>
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.type.toLowerCase().includes(query)
    );
  };

  // Sort events by date
  const sortEvents = (events) => {
    return [...events].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.dateSort - b.dateSort;
      } else {
        return b.dateSort - a.dateSort;
      }
    });
  };

  // Apply filters and sorting
  const getFilteredAndSortedEvents = (events) => {
    const filtered = filterEvents(events);
    return sortEvents(filtered);
  };

  const filteredPractices = getFilteredAndSortedEvents(practices);
  const filteredTryouts = getFilteredAndSortedEvents(tryouts);
  const filteredTournaments = getFilteredAndSortedEvents(tournaments);
  const filteredAllEvents = getFilteredAndSortedEvents(allEvents);

  return (
    <Container fluid className="my-5">
      <h1 className="mb-4">Events</h1>

      {/* Search and Sort Controls */}
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <InputGroup.Text>🔍</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search events by title, description, location, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search events"
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            aria-label="Sort events by date"
          >
            <option value="asc">Sort by Date (Earliest First)</option>
            <option value="desc">Sort by Date (Latest First)</option>
          </Form.Select>
        </Col>
      </Row>

      <Tabs defaultActiveKey="all" className="mb-4">
        <Tab eventKey="all" title="All Events">
          {filteredAllEvents.length > 0 ? (
            filteredAllEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-muted">No events match your search criteria.</p>
          )}
        </Tab>

        <Tab eventKey="practices" title="Practices">
          {filteredPractices.length > 0 ? (
            filteredPractices.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-muted">No practice sessions match your search criteria.</p>
          )}
        </Tab>

        <Tab eventKey="tryouts" title="Tryouts">
          {filteredTryouts.length > 0 ? (
            filteredTryouts.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-muted">No tryouts match your search criteria.</p>
          )}
        </Tab>

        <Tab eventKey="tournaments" title="Tournaments">
          {filteredTournaments.length > 0 ? (
            filteredTournaments.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-muted">No tournaments match your search criteria.</p>
          )}
        </Tab>
      </Tabs>

      {/* Event Photo Gallery */}
      <Row className="mt-5">
        <Col>
          <h2 className="mb-3">Event Photos</h2>
          <Row>
            <Col md={4} className="mb-3">
              <img
                src="/p35/images/events/WiscoEvent1.jpg"
                alt="Club tennis team members competing in tournament action shot"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={4} className="mb-3">
              <img
                src="/p35/images/events/WiscoEvent2.jpg"
                alt="Team members practicing tennis drills at practice session"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={4} className="mb-3">
              <img
                src="/p35/images/events/WiscoEvent3.jpg"
                alt="Club tennis team during competitive match event"
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
