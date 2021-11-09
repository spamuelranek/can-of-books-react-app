import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: ''
   }
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.formBasicEmail[0].value;
    let userName = e.target.formBasicEmail[1].value;
    let user = {email,userName}
    console.log(user);
    this.props.loginHandler(user);
  }

  render() {
    return (
      <Form onSubmit = {this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter user name" />
          <Button type ="submit">Enter</Button>
        </Form.Group>
      </Form>
    );
  }
};

export default LoginForm;
