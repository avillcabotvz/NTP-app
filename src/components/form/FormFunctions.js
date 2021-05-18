
import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import FormThing from './FormThing'

export default class FormFunctions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      categories: { data: [], loading: true },
      person: { data: [], loading: true },
      status: { data: [], loading: true },
    }
  }


  async componentDidMount() {
    async function GetAPI(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    this.setState({
      categories: { data: await GetAPI('http://localhost:2000/categories'), loading: false },
      person: { data: await GetAPI('http://localhost:2000/person'), loading: false },
      status: { data: await GetAPI('http://localhost:2000/status'), loading: false },
    })


  }

  render() {

    if (this.state.categories.loading && this.state.person.loading && this.state.status.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      )
    }
    if (!(this.state.categories.loading && this.state.person.loading && this.state.status.loading)) {
      const status = this.state.status.data;
      const persons = this.state.person.data;
      const categories = this.state.categories.data;
      this.state.person.loading = false
      return (
        <div>
          <FormThing status={status} persons={persons} categories={categories} ></FormThing>
        </div>
      )
    }


  }
}
