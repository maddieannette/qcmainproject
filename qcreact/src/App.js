import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/LoginPage/LoginPage';
import SignUp from './components/Signup/Signup';
import DashBoard from './components/DashBoard/DashBoard';
import DailyForm from './components/Form/DailyForm';
import SideBarNav from './components/DashBoard/SideBarNav';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to="/sign-in">Health Front QC</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sign-in">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sign-up">Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> */}

                    <div className="auth-wrapper">
                        {/* <div className="auth-inner"> */}
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                            <Route path="/dashboard" component={DashBoard} />
                            <Route path="/dailyform" component={DailyForm} />
                            <Route path="/sidebarnav" component={SideBarNav} />
                        </Switch>
                    </div>
                </div>
                {/* </div> */}
            </Router>
        </Provider>
    );
}

export default App;
