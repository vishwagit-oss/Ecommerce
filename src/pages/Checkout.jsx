import { useSelector } from "react-redux";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import PaymentPage from "../components/Paymentpage/PaymentPage";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const handlePlaceOrder = (paymentMethod) => {
    alert(`Order placed successfully with ${paymentMethod}!`);
    // Add logic for order placement here
  };

  return (
    <section className="checkout">
      <Container>
        <Row>
          <Col md={8}>
            <h2>Billing Details</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>
            </Form>
            <PaymentPage onPaymentSubmit={handlePlaceOrder} />
          </Col>
          <Col md={4}>
            <h2>Order Summary</h2>
            <ul>
              {cartList.map((item) => (
                <li key={item.id}>
                  {item.productName} x {item.qty}: ${item.price * item.qty}.00
                </li>
              ))}
            </ul>
            <h4>Total: ${totalPrice}.00</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
