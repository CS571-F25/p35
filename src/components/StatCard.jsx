import { Card } from 'react-bootstrap';

function StatCard({ icon, value, label, description }) {
  return (
    <Card className="text-center h-100 shadow-sm">
      <Card.Body className="d-flex flex-column justify-content-center">
        <div className="display-4 mb-3">{icon}</div>
        <h2 className="display-5 fw-bold text-danger mb-2">{value}</h2>
        <h3 className="h5 mb-2">{label}</h3>
        {description && (
          <p className="text-muted small mb-0">{description}</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default StatCard;
