import { Card, Badge, Button } from 'react-bootstrap';
import { useShop } from '../contexts/ShopContext';

function EventCard({ title, date, time, location, type, description, dateSort }) {
  const { addEventToCart, getEventHeadcount } = useShop();

  const getTypeBadge = (type) => {
    const badgeMap = {
      practice: 'primary',
      tryout: 'success',
      tournament: 'danger'
    };
    return badgeMap[type] || 'secondary';
  };

  const handleRsvp = () => {
    addEventToCart({ title, date, time, location, type, description, dateSort });
  };

  const headcount = getEventHeadcount(title);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title>{title}</Card.Title>
          <Badge bg={getTypeBadge(type)}>{type}</Badge>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          {date} at {time}
        </Card.Subtitle>
        <Card.Text>
          <strong>Location:</strong> {location}
        </Card.Text>
        {description && <Card.Text>{description}</Card.Text>}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Badge bg="info" className="me-2">
              👥 {headcount} {headcount === 1 ? 'person' : 'people'} attending
            </Badge>
          </div>
          <Button variant="success" size="sm" onClick={handleRsvp}>
            RSVP to Event
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
