import { Container, Row, Col, Alert } from 'react-bootstrap';
import MerchItem from './MerchItem';

function Merch() {
  const products = [
    {
      name: "Club T-Shirt",
      price: 24.99,
      image: "https://via.placeholder.com/300x300?text=Club+T-Shirt",
      description: "100% cotton t-shirt with club logo. Available in red and white."
    },
    {
      name: "Tennis Cap",
      price: 18.99,
      image: "https://via.placeholder.com/300x300?text=Tennis+Cap",
      description: "Adjustable cap perfect for sunny days on the court."
    },
    {
      name: "Team Hoodie",
      price: 44.99,
      image: "https://via.placeholder.com/300x300?text=Team+Hoodie",
      description: "Warm and comfortable hoodie with embroidered logo."
    },
    {
      name: "Water Bottle",
      price: 14.99,
      image: "https://via.placeholder.com/300x300?text=Water+Bottle",
      description: "32oz insulated water bottle keeps drinks cold for hours."
    },
    {
      name: "Tennis Bag",
      price: 54.99,
      image: "https://via.placeholder.com/300x300?text=Tennis+Bag",
      description: "Spacious bag with compartments for rackets and gear."
    },
    {
      name: "Wristbands Set",
      price: 9.99,
      image: "https://via.placeholder.com/300x300?text=Wristbands",
      description: "Set of 2 moisture-wicking wristbands in team colors."
    },
    {
      name: "Drawstring Backpack",
      price: 12.99,
      image: "https://via.placeholder.com/300x300?text=Backpack",
      description: "Lightweight drawstring bag perfect for practice."
    },
    {
      name: "Club Sticker Pack",
      price: 5.99,
      image: "https://via.placeholder.com/300x300?text=Stickers",
      description: "Set of 5 waterproof stickers featuring club designs."
    },
    {
      name: "Performance Polo",
      price: 34.99,
      image: "https://via.placeholder.com/300x300?text=Polo+Shirt",
      description: "Moisture-wicking polo shirt ideal for matches."
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">Club Merchandise</h1>

      <Alert variant="info">
        All proceeds from merchandise sales support team activities and events. Thank you for your support!
      </Alert>

      <Row className="mt-4">
        {products.map((product, index) => (
          <Col md={4} key={index} className="mb-4">
            <MerchItem
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </Col>
        ))}
      </Row>

      {/* Shipping Info */}
      <Row className="mt-5">
        <Col>
          <Alert variant="secondary">
            <h5>Shipping & Pickup Information</h5>
            <ul className="mb-0">
              <li>Free pickup available at Nielsen Tennis Stadium during office hours</li>
              <li>Shipping available within the US - calculated at checkout</li>
              <li>All items typically ship within 3-5 business days</li>
              <li>Questions? Contact us at merch@uwclubtennis.org</li>
            </ul>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Merch;
