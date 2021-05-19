import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiPost } from '../../api';

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
      },
    };
  }

  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    const handleChange = this.handleFormChange.bind(this);

    return (
      <Container style={{ padding: "100px" }}>
        <h1>Add Person</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstname">
              <Form.Label column sm={4}>
                First name
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="firstname" type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
              <Form.Label column sm={4}>
                Last Name
                </Form.Label>
              <Col>

                <Form.Control onChange={handleChange} name="lastname" type="text" />
              </Col>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Button block type="submit" variant="dark" className="submit" >
              Submit
                </Button>
          </Form.Row>

        </Form>
      </Container>
    )
  }

  async handleSubmit(ev) {
    ev.preventDefault();;
    console.log(this.state.formData)
    await apiPost('/person', this.state.formData);

    this.props.history.push('/');
  }

  handleFormChange(ev) {
    const fieldName = ev.target.name;
    if (!fieldName) {
      return;
    }

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [fieldName]: ev.target.value,
      },
    });
  }
}

export default withRouter(AddPerson);