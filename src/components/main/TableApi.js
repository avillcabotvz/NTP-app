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
    const url = "http://localhost:2000/tasks";
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

        
        <Container>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Category</th>
                <th>Person</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map(item =>
                (<tr key={item.id}>
                  <td>{item.taskname}</td>
                  <td>{item.taskdesc}</td>
                  <td>{format(new Date(item.startdate), 'MM/dd/yyyy')}</td>
                  <td>{format(new Date(item.enddate), 'MM/dd/yyyy')}</td>
                  <td>{item.status}</td>
                  <td>{item.category}</td>
                  <td>{item.firstname + ' ' + item.lastname}</td>              
                  <td><Button variant="secondary">Edit</Button></td>
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