import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiPost } from '../../api';
import { format } from 'date-fns'

class FormUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        taskid: 1,
      }
    };
  }


  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    const handleChange = this.handleFormChange.bind(this);

    const status = this.props.status;
    const persons = this.props.persons;
    const categories = this.props.categories;
    const tasks = this.props.tasks;
    const current_id = (this.state.formData.taskid==0)?'1':this.state.formData.taskid-1;
    console.log(current_id);
    console.log(tasks[current_id])

    return (
      <Container style={{ padding: "100px" }}>
        <h1>Update task</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="taskid">
              <Form.Label column sm={2}>Task</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="taskid">
                  <option key="0" value="">Tasks</option>
                  {
                    tasks.map(task =>
                      <option key={task.id} value={task.id}>{task.taskname}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="task_name">
              <Form.Label column sm={2}>
                Task Name
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={tasks[current_id].taskname} name="taskname" type="text" />
              </Col>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
                Task Description
                </Form.Label>
              <Col>
                <Form.Control value={tasks[current_id].taskdesc} onChange={handleChange} name="taskdesc" as="textarea" rows="4" cols="50" placeholder="Task description" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label column sm={2}>
                Start Date
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(tasks[current_id].startdate), 'yyyy-MM-dd')} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label column sm={2}>
                End Date
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(tasks[current_id].enddate), 'yyyy-MM-dd')} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>Category</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} DefaultValue={tasks[current_id].categoryid} as="select" name="categoryid">
                  <option key="0" value="">Categories</option>
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
                  <option key="0" value="">Status</option>
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
                  <option key="0" value="">Person</option>
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

  handleTaskChange(ev) {
    this.handleFormChange(ev);



  }
}

export default withRouter(FormUpdate);