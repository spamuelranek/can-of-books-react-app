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

  emailChange = (e) => {
    this.setState = ({email: e.target.value});
  }

  userNameChange = (e) => {
    this.setState = ({userName: e.target.value});
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    let user = {email: this.state.email, userName: this.state.userName};
    this.props.loginHandler(user);
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange = {this.emailChange} value = {this.state.email} type="email" placeholder="Enter email" />
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange = {this.userNameChange} value = {this.state.userName} type="text" placeholder="Enter user name" />
          <Button onSubmit = {this.handleSubmit}>Enter</Button>
        </Form.Group>
      </Form>
    );
  }
};

export default LoginForm;
