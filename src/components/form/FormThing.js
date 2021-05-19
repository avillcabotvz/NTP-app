import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiPost } from '../../api';

class FormThing extends Component {
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

    const status = this.props.status;
    const persons = this.props.persons;
    const categories = this.props.categories;
    console.log(this.state);


    return (
      
      <Container style={{padding: "100px"}}>
        <h1>Insert task</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="task_name">
              <Form.Label column sm={2}>
                Task Name
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskname" type="text" placeholder="Task name" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
                Task Description
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskdesc" as="textarea" rows="4" cols="50" placeholder="Task description" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label column sm={2}>
                Start Date
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label column sm={2}>
                End Date
                </Form.Label>
              <Col>

                <Form.Control onChange={handleChange} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>Category</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="categoryid">
                  <option key="0" value="0"> </option>
                  {
                    categories.map(category =>
                      <option key={category.id} value={category.id}>{category.category}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="status">
              <Form.Label>Status</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="statusid" >
                  <option key="0" value="0"> </option>
                  {
                    status.map(status =>
                      <option key={status.id} value={status.id}>{status.status}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="Person">
              <Form.Label>Person</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="personid">
                  <option key="0" value="0"> </option>
                  {
                    persons.map(person =>
                      <option key={person.id} value={person.id}>{person.firstname + ' ' + person.lastname}</option>
                    )
                  }
                </Form.Control>
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
    await apiPost('/tasks', this.state.formData);

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

export default withRouter(FormThing);