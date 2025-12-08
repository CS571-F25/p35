import { Container, Table, Button, Alert, Form } from 'react-bootstrap';
import { useShop } from '../contexts/ShopContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useShop();

  const handleQuantityChange = (itemName, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity)) {
      updateQuantity(itemName, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <Container className="my-5">
        <h1 className="mb-4">Shopping Cart</h1>
        <Alert variant="info">
          Your cart is empty. <Link to="/merch">Browse our merchandise</Link> to get started!
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart</h1>

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
          {cart.map((item) => (
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

      <div className="d-flex justify-content-between align-items-center mt-4">
        <Button variant="outline-danger" onClick={clearCart}>
          Clear Cart
        </Button>
        <div className="text-end">
          <h4>Total: ${getCartTotal().toFixed(2)}</h4>
          <Button variant="success" size="lg" className="mt-2">
            Proceed to Checkout
          </Button>
        </div>
      </div>

      <Alert variant="secondary" className="mt-4">
        <strong>Note:</strong> This is a demo cart. No actual transactions will be processed.
      </Alert>
    </Container>
  );
}

export default Cart;
