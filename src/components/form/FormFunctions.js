import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { apiGet } from '../../api';
import FormDelete from './FormDelete';
import FormThing from './FormThing'
import FormUpdate from './FormUpdate';

export default class FormFunctions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      categories: [],
      persons: [],
      status: [],
      tasks: [],
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });

    const [categories, persons, status,tasks] = await Promise.all([
      apiGet('/categories'),
      apiGet('/person'),
      apiGet('/status'),
      apiGet('/tasks')
    ]);

    this.setState({
      loading: false,
      categories,
      persons,
      status,
      tasks
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    const { status, persons, categories, tasks } = this.state;
    if (this.props.edit === true) {
      return (
        <div>
          <FormUpdate tasks={tasks} status={status} persons={persons} categories={categories} />
        </div>
      );
    }

    if (this.props.delete === true) {
      return (
        <div>
          <FormDelete tasks={tasks} />
        </div>
      );
    }

    else {
      return (
        <div>
          <FormThing status={status} persons={persons} categories={categories} />
        </div>
      );
    }
  }
}
