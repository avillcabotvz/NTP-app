import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiPost } from '../../api';

class AddCategory extends Component {
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
      <Container style={{padding: "100px"}}>
        <h1>Add Category</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="status">
              <Form.Label column sm={2}>
                Category
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="category" type="text" placeholder="Category" />
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
    await apiPost('/categories', this.state.formData);

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

export default withRouter(AddCategory);