
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PaymentPage = ({ onPaymentSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (onPaymentSubmit) {
      onPaymentSubmit(paymentMethod);
    } else {
      alert("Payment successful!");
    }
  };

  return (
    <section className="payment-page">
      <h2>Payment Details</h2>
      <Form onSubmit={handlePaymentSubmit}>
        <Form.Group controlId="formPaymentMethod">
          <Form.Label>Select Payment Method</Form.Label>
          <Form.Select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="mt-3">
          Proceed with Payment
        </Button>
      </Form>
    </section>
  );
};

export default PaymentPage;
