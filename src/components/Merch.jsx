import { Container, Row, Col, Alert, Form, InputGroup, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import MerchItem from './MerchItem';

function Merch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const products = [
    {
      name: "Club T-Shirt",
      price: 24.99,
      image: "/p35/images/merch/WiscoRedShirt.jpg",
      description: "100% cotton t-shirt with club logo. Available in red and white.",
      category: "upper-body"
    },
    {
      name: "Tennis Cap",
      price: 18.99,
      image: "/p35/images/merch/WiscoCapRed.jpg",
      description: "Adjustable cap perfect for sunny days on the court.",
      category: "headwear"
    },
    {
      name: "Team Hoodie",
      price: 44.99,
      image: "/p35/images/merch/WiscoHoodie.jpg",
      description: "Warm and comfortable hoodie with embroidered logo.",
      category: "upper-body"
    },
    {
      name: "Water Bottle",
      price: 14.99,
      image: "/p35/images/merch/WiscoWaterbottle.jpg",
      description: "32oz insulated water bottle keeps drinks cold for hours.",
      category: "accessories"
    },
    {
      name: "Tennis Bag",
      price: 54.99,
      image: "/p35/images/merch/WiscoTennisBag.jpg",
      description: "Spacious bag with compartments for rackets and gear.",
      category: "accessories"
    },
    {
      name: "Wristbands Set",
      price: 9.99,
      image: "/p35/images/merch/WiscoWristbands.jpg",
      description: "Set of 2 moisture-wicking wristbands in team colors.",
      category: "accessories"
    },
    {
      name: "Drawstring Backpack",
      price: 12.99,
      image: "/p35/images/merch/WiscoDrawstring.jpg",
      description: "Lightweight drawstring bag perfect for practice.",
      category: "accessories"
    },
    {
      name: "Club Sticker Pack",
      price: 5.99,
      image: "/p35/images/merch/WiscoStickers.jpg",
      description: "Set of 5 waterproof stickers featuring club designs.",
      category: "accessories"
    },
    {
      name: "Performance Polo",
      price: 34.99,
      image: "/p35/images/merch/WiscoPolo.jpg",
      description: "Moisture-wicking polo shirt ideal for matches.",
      category: "upper-body"
    },
    {
      name: "Team Sweatpants",
      price: 39.99,
      image: "/p35/images/merch/WiscoSweatpants.jpg",
      description: "Comfortable sweatpants with embroidered club logo.",
      category: "lower-body"
    },
    {
      name: "Athletic Shorts",
      price: 29.99,
      image: "/p35/images/merch/WiscoShorts.jpg",
      description: "Lightweight athletic shorts perfect for training.",
      category: "lower-body"
    },
    {
      name: "Team Crewneck",
      price: 42.99,
      image: "/p35/images/merch/WiscoCrewneck.jpg",
      description: "Classic crewneck sweatshirt with club branding.",
      category: "upper-body"
    },
    {
      name: "Racket Shock Absorber",
      price: 6.99,
      image: "/p35/images/merch/WiscoDampener.jpg",
      description: "Reduces vibration and improves comfort. Set of 2.",
      category: "accessories"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'upper-body', label: 'Upper Body' },
    { value: 'lower-body', label: 'Lower Body' },
    { value: 'headwear', label: 'Headwear' },
    { value: 'accessories', label: 'Accessories' }
  ];

  // Filter and sort products
  const filterProducts = () => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <Container fluid className="my-5">
      <h1 className="mb-4">Club Merchandise</h1>

      <Alert variant="info">
        All proceeds from merchandise sales support team activities and events. Thank you for your support!
      </Alert>

      {/* Search and Sort Controls */}
      <Row className="mt-4 mb-4">
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text>🔍</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search merchandise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search merchandise"
            />
          </InputGroup>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort merchandise"
          >
            <option value="default">Sort By (Default)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Category Filters */}
      <Row className="mb-4">
        <Col>
          <ButtonGroup className="w-100 d-flex flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'danger' : 'outline-danger'}
                onClick={() => setSelectedCategory(category.value)}
                className="flex-grow-1"
              >
                {category.label}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      {/* Product Grid */}
      <Row className="mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Col md={4} key={index} className="mb-4">
              <MerchItem
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="warning">
              No products match your search criteria. Try adjusting your filters or search terms.
            </Alert>
          </Col>
        )}
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
