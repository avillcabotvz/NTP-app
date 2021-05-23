import React, { Component } from 'react'
import { Form, Col, Button, Container, Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { apiDelete } from '../../api';

class FormDelete extends Component {
  constructor(props) {
    super(props);
    const taskid = props.match.params.id ? parseInt(props.match.params.id) : 0;
    const currentTask = taskid ? props.tasks.find((task) => task.id === taskid) : props.tasks[0];
    this.state = {
      taskid,
      formData: {
        ...(currentTask ?? {})
      },
    };
  }

  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    const changeTaskId = (ev) => {
      const taskid = parseInt(ev.target.value);
      const task = tasks.find((task) => task.id === taskid);
      this.setState({
        taskid,
        formData: { ...task },
      });
    }

    const tasks = this.props.tasks;
      return (
        <Container style={{ padding: "100px" }}>
          <h1>Delete task</h1>
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
    await apiDelete(`/tasks/${this.state.taskid}`, this.state.formData);
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

export default withRouter(FormDelete);