import { Container, Table, Button, Alert, Form, Card } from 'react-bootstrap';
import { useShop } from '../contexts/ShopContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, confirmEventRsvps } = useShop();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity)) {
      updateQuantity(itemId, quantity);
    }
  };

  const products = cart.filter(item => item.itemType !== 'event');
  const events = cart.filter(item => item.itemType === 'event');

  const handleCheckout = () => {
    if (events.length > 0) {
      confirmEventRsvps();
      const totalRsvps = events.reduce((sum, event) => sum + event.quantity, 0);
      setCheckoutMessage(`Successfully confirmed ${totalRsvps} RSVP${totalRsvps > 1 ? 's' : ''} to ${events.length} event${events.length > 1 ? 's' : ''}!`);

      if (products.length === 0) {
        setTimeout(() => setCheckoutMessage(''), 5000);
      }
    }

    if (products.length > 0) {
      const productMessage = `Checkout completed for ${products.length} product${products.length > 1 ? 's' : ''}!`;
      setCheckoutMessage(prev => prev ? `${prev} ${productMessage}` : productMessage);
      clearCart();
      setTimeout(() => setCheckoutMessage(''), 5000);
    }
  };

  if (cart.length === 0) {
    return (
      <Container className="my-5">
        <h1 className="mb-4">Shopping Cart</h1>
        {checkoutMessage && (
          <Alert variant="success" onClose={() => setCheckoutMessage('')} dismissible>
            {checkoutMessage}
          </Alert>
        )}
        <Alert variant="info">
          Your cart is empty. <Link to="/merch">Browse our merchandise</Link> or <Link to="/events">RSVP to events</Link> to get started!
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart</h1>

      {checkoutMessage && (
        <Alert variant="success" onClose={() => setCheckoutMessage('')} dismissible>
          {checkoutMessage}
        </Alert>
      )}

      {/* Event RSVPs Section */}
      {events.length > 0 && (
        <Card className="mb-4">
          <Card.Header as="h2">Event RSVPs</Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date & Time</th>
                  <th>Number of People</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.title}>
                    <td>
                      <div>
                        <strong>{event.title}</strong>
                        <div className="text-muted small">{event.description}</div>
                        <div className="text-muted small">
                          <strong>Location:</strong> {event.location}
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      {event.date}<br />
                      {event.time}
                    </td>
                    <td className="align-middle">
                      <Form.Control
                        type="number"
                        min="1"
                        value={event.quantity}
                        onChange={(e) => handleQuantityChange(event.title, e.target.value)}
                        style={{ width: '80px' }}
                        aria-label={`Number of people for ${event.title}`}
                      />
                    </td>
                    <td className="align-middle">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(event.title)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {/* Products Section */}
      {products.length > 0 && (
        <Card className="mb-4">
          <Card.Header as="h2">Merchandise</Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }}
                        />
                        <div>
                          <strong>{item.name}</strong>
                          <div className="text-muted small">{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">${item.price.toFixed(2)}</td>
                    <td className="align-middle">
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                        style={{ width: '80px' }}
                        aria-label={`Quantity for ${item.name}`}
                      />
                    </td>
                    <td className="align-middle">
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </td>
                    <td className="align-middle">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.name)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      <div className="d-flex justify-content-between align-items-center mt-4">
        <Button variant="outline-danger" onClick={clearCart}>
          Clear Cart
        </Button>
        <div className="text-end">
          {products.length > 0 && (
            <h2>Merchandise Total: ${getCartTotal().toFixed(2)}</h2>
          )}
          {events.length > 0 && (
            <p className="text-muted">
              RSVPing for {events.reduce((sum, e) => sum + e.quantity, 0)} {events.reduce((sum, e) => sum + e.quantity, 0) === 1 ? 'person' : 'people'} to {events.length} {events.length === 1 ? 'event' : 'events'}
            </p>
          )}
          <Button variant="success" size="lg" className="mt-2" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </div>

      <Alert variant="secondary" className="mt-4">
        <strong>Note:</strong> This is a demo cart. Event RSVPs will be confirmed and added to the headcount. No actual transactions will be processed for merchandise.
      </Alert>
    </Container>
  );
}

export default Cart;
