import React, { Component } from 'react';
import {
    Card, Alert, Form, Col
} from 'react-bootstrap';
import './DashBoard.css';

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <Alert variant="info" className="alert-banner">
                    <Alert.Heading>Welcome, nice to see you!</Alert.Heading>
                </Alert>

                <Card style={{ width: '50%' }} className="card-form">
                    <Card.Body className="card-title">Daily Preventative Maintinence Form
                        <Form.Group controlId="formBasicCheckbox">
                            <br />
                            <h6>Choose department:</h6>
                            <div className="department-box">
                                <Form.Check type="checkbox" label="General Lab" />
                                <Form.Check type="checkbox" label="Hematology" />
                                <Form.Check type="checkbox" label="Chemistry" />
                                <Form.Check type="checkbox" label="Blood Bank" />
                            </div>
                            <div>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Autoclave Temp:</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Pressure:</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Freezers Visual:</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Thermal Stability:</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>
                            </div>
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Enter Date: mm/dd/yyyy" />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Enter Name: D.LAB.JDOE" />
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
