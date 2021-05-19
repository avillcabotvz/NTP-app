import React, { Component, createRef } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { apiPost } from '../../api'
import { setToken } from './jwt'

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameField = createRef();
        this.passwordField = createRef();

        this.state = {
            loggingIn: false,
            loginError: null,
            formData: {
                username: '',
                password: '',
            },
        };
    }

    render() {
        const handleChange = this.handleFormChange.bind(this);
        const attemptLogin = this.attemptLogin.bind(this);
        const { loggingIn, loginError } = this.state;

        return (
            <div className="mt-5 container">
                <div className="col-12 col-lg-6 mx-auto">
                    <Card>
                        <Card.Body>
                            <h3 className="text-center">
                                <FontAwesomeIcon icon={faLock} />
                                &nbsp;
                                Login
                            </h3>
                            <hr />
                            <Form onSubmit={attemptLogin}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control ref={this.usernameField} name="username" type="text" onChange={handleChange} autoCapitalize="off" placeholder="Enter your username" />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control ref={this.passwordField} name="password" type="password" onChange={handleChange} placeholder="Enter your password" />
                                </Form.Group>
                                <Form.Group className="d-flex">
                                <Button disabled={loggingIn} variant="primary" type="submit" className="mx-auto">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    Log in
                                </Button>
                                </Form.Group>

                                {loginError && <Alert variant="danger">{loginError}</Alert>}
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

    handleFormChange(ev) {
        const fieldName = ev.target.name;
        if (!fieldName) {
            return;
        }

        this.setState({
            formData: {
                ...this.state.formData,
                [fieldName]: ev.target.value,
            },
        });
    }

    async attemptLogin(ev) {
        ev.preventDefault();

        this.setState({
            loggingIn: true,
            loginError: null,
        });

        try {
            const { username, password } = this.state.formData;
            const { error, token } = await apiPost('/login', { username, password });
            if (error) {
                this.setState({ loginError: error });
            } else {
                this.onLogin(token);
            }
        } catch (err) {
            console.log('ERR: ', err);
            this.setState({ loginError: 'Something broke' });
        }

        this.setState({ loggingIn: false })
    }

    onLogin(token) {
        setToken(token);
        this.props.history.push('/');
    }
}

export default withRouter(Login);