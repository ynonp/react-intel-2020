import React from 'react';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";

import './App.css';
import {number} from "prop-types";


function Users() {
    const { id } = useParams();

    const index = Number(id) - 1;

    const users = [
        { name: 'ynon' },
        { name: 'demo' },
        { name: 'bill' },
    ];

    return (
        <div>
            <p>Hello {users[index].name}</p>
        </div>
    )
}

function Home() {
    return (
        <div>
            <p>Home Page</p>
        </div>
    )
}


function About() {
    return (
        <div>
            <p>About Page</p>
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users/1">Users/1</Link>
                                <Link to="/users/2">Users/2</Link>
                                <Link to="/users/3">Users/3</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users/:id">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>

    </div>
  );
}

export default App;
