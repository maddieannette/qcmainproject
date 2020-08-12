import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label htmlFor="emailInput">Email address
                        <input
                            id="emailInput"
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            />
                        </label>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordInput">Password
                        <input
                            id="passwordInput"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </label>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <label className="custom-control-label" htmlFor="customCheck1">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            Remember me
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
