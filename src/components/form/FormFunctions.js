import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { apiGet } from '../../api';
import FormThing from './FormThing'

export default class FormFunctions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      categories: [],
      persons: [],
      status: [],
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });

    const [categories, persons, status] = await Promise.all([
      apiGet('/categories'),
      apiGet('/person'),
      apiGet('/status'),
    ]);

    this.setState({
      loading: false,
      categories,
      persons,
      status
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

    const { status, persons, categories } = this.state;

    return (
      <div>
        <FormThing status={status} persons={persons} categories={categories} />
      </div>
    );
  }
}
