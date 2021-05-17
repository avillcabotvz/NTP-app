import React, { Component } from 'react'
import { Form, FormControl, Row, Col, Button } from 'react-bootstrap'

export default class FormFunctions extends Component {

  async componentDidMount() {
    const url = "http://localhost:2000/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      data: data
    })

  }

  render() {


    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="task_name">
            <Form.Label column sm={2}>
              Task Name
          </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Task name" />
            </Col>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="task_desc">
            <Form.Label column sm={2}>
              Task Description
          </Form.Label>
            <Col>
              <Form.Control as="textarea" rows="4" cols="50" placeholder="Task description" />
            </Col>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="start_date">
            <Form.Label column sm={2}>
              Start Date
          </Form.Label>
            <Col>
              <Form.Control type="date"/>
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="end_date">
            <Form.Label column sm={2}>
              End Date
          </Form.Label>
            <Col>
              <Form.Control type="date"/>
            </Col>
          </Form.Group>


        </Form.Row>

      </Form>
    )
  }
}
