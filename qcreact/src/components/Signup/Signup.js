import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
        return (
            <form className="auth-inner">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="firstNameInput">First name
                        <input
                            id="firstNameInput"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                        />
                    </label>

                </div>

                <div className="form-group">
                    <label htmlFor="lastNameInput">Last className
                        <input id="lastNameInput" type="text" className="form-control" placeholder="Last name" />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="emailInput">Email address
                        <input id="emailInput" type="email" className="form-control" placeholder="Enter email" />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordInput">Password
                        <input id="passwordInput" type="password" className="form-control" placeholder="Enter password" />
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    {/* Already registered <a href="#">sign in?</a> */}
                </p>
            </form>
        );
    }
}
