import React, { Component } from 'react';
import Card from 'react-bootstrap';

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
        );
    }
}
