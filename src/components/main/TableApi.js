import React from 'react'
import { Table, Spinner, Button, Container } from 'react-bootstrap'
import { format } from 'date-fns'
import { apiGet } from '../../api';


export default class TableApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tasks: []
    }
  }

  async componentDidMount() {
    this.getTasks();
  }

  async getTasks() {
    this.setState({ loading: true });

    const tasks = await apiGet('/tasks');

    this.setState({
      loading: false,
      tasks
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    // Ako si gore return kad je loading, ovdje ti ne treba opet if sa istim uvjetom, sigurno je returnao
    // Those are known as "guard clauses"

    const { tasks } = this.state;

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
              tasks.map(item =>
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