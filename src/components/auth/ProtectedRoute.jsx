import React, { Component } from 'react'
import { Redirect, Route } from 'react-router';
import { getTokenData } from './jwt';

export default class ProtectedRoute extends Component {
    render() {
        const token = getTokenData();
        return token ? (<Route { ...this.props } />) : (<Redirect to="/login" />);
    }
}
