import { Card, Button } from 'react-bootstrap';

function MerchItem({ name, price, image, description }) {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart!`);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h5 className="mb-0">${price}</h5>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MerchItem;
