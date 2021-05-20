import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiPut } from '../../api';
import { format } from 'date-fns'

class FormUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskid: 0,
      formData: {
        ...(props.match.params.id?props.tasks.find((task) => task.id === parseInt(props.match.params.id)):props.tasks[0] ?? {})
      },
    };
  }


  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    const handleChange = this.handleFormChange.bind(this);
    const changeTaskId = (ev) => {
      const taskid = parseInt(ev.target.value);
      const task = tasks.find((task) => task.id === taskid);
      this.setState({
        taskid,
        // Three dot thingie makes a copy of the task
        formData: { ...task },
      });
    }

    const status = this.props.status;
    const persons = this.props.persons;
    const categories = this.props.categories;
    const tasks = this.props.tasks;
    const formData = this.state.formData;

    return (
      <Container style={{ padding: "100px" }}>
        <h1>Update task</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="taskid">
              <Form.Label column sm={2}>Task</Form.Label>
              <Col>
                <Form.Control onChange={changeTaskId} as="select" name="taskid">
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
                <Form.Control onChange={handleChange} value={formData.taskname} name="taskname" type="text" />
              </Col>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
                Task Description
                </Form.Label>
              <Col>
                <Form.Control value={formData.taskdesc} onChange={handleChange} name="taskdesc" as="textarea" rows="4" cols="50" placeholder="Task description" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label column sm={2}>
                Start Date
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(formData.startdate), 'yyyy-MM-dd')} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label column sm={2}>
                End Date
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(formData.enddate), 'yyyy-MM-dd')} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>Category</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} defaultValue={formData.categoryid} as="select" name="categoryid">
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
                <Form.Control onChange={handleChange} value={formData.statusid} as="select" name="statusid" >
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
                <Form.Control onChange={handleChange} value={formData.personid} as="select" name="personid">
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
    ev.preventDefault();
    apiPut(`/tasks/${this.state.taskid}`, this.state.formData);

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