import { Card } from 'react-bootstrap';

function NewsCard({ title, date, content}) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
