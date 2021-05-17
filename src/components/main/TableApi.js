import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { Table, Spinner, Button, Alert, Container } from 'react-bootstrap'
import { format } from 'date-fns'

export default class TableApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }

  }
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
    var items = this.state.data;
    if (this.state.loading == true) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      )
    }
    if (this.state.loading == false) {
      return (
        <Container fluid>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map(item =>
                (<tr>
                  <th>{item.task_id}</th>
                  <th>{item.task_name}</th>
                  <th>{item.task_desc}</th>
                  <th>{format(new Date(item.start_date), 'MM/dd/yyyy')}</th>
                  <th>{format(new Date(item.end_date), 'MM/dd/yyyy')}</th>
                  <th>{item.status}</th>
                  <th><Button variant="secondary">Edit</Button></th>
                </tr>)
                )
              }
            </tbody>
          </Table>
        </Container>
      )
    }

  }


}