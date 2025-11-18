import { Card, Badge } from 'react-bootstrap';

function EventCard({ title, date, time, location, type, description }) {
  const getTypeBadge = (type) => {
    const badgeMap = {
      practice: 'primary',
      tryout: 'success',
      tournament: 'danger'
    };
    return badgeMap[type] || 'secondary';
  };

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
      </Card.Body>
    </Card>
  );
}

export default EventCard;
