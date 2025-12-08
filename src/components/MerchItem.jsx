import { Card, Button } from 'react-bootstrap';
import { useShop } from '../contexts/ShopContext';

function MerchItem({ name, price, image, description }) {
  const { addToCart, toggleLike, isLiked } = useShop();

  const handleAddToCart = () => {
    addToCart({ name, price, image, description });
  };

  const handleToggleLike = () => {
    toggleLike(name);
  };

  const liked = isLiked(name);

  return (
    <Card className="h-100">
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Button
          variant="link"
          onClick={handleToggleLike}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '1.5rem',
            textDecoration: 'none',
            background: 'white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            border: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
          aria-label={liked ? 'Unlike item' : 'Like item'}
        >
          {liked ? '❤️' : '🤍'}
        </Button>
      </div>
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
