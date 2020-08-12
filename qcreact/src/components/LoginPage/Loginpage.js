import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label htmlFor="userInput">Username
                        <input
                            id="userInput"
                            type="username"
                            className="form-control"
                            placeholder="Enter username"
                            required
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
                            required
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
            </form>
        );
    }
}
