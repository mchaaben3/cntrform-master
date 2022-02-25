import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Register from "./Register";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalRegister, setModalRegister] = React.useState(false);

  const submitHandler = (e) => {
  console.log(email, password)
}
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-login text-white p-5">
        <Form  onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="button-login">
            Sign in
          </Button>
          <Button variant="success"   onClick={() => setModalRegister(true)}>
            Sign up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
     <Register
     show={modalRegister}
     onHide={() => setModalRegister(false)}
   />
   </>
  );
};

export default Login;
