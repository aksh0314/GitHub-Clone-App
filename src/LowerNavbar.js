import React from 'react';
import './LowerNavbar.css';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Overview from './Overview';
import Repositories from './Repositories';
import {BookIcon, RepoIcon} from '@primer/octicons-react'

export default function LowerNavbar() {
    return (
        <BrowserRouter>
            <div className="lower-nav">
                <div className="lower-nav-1"></div>
                <ul className="lower-nav-2">
                    <li><NavLink activeClassName="active" exact to="/"><BookIcon size='small'/>Overview</NavLink></li>
                    <li>
                        <NavLink activeClassName="active" to="Repositories">
                            <RepoIcon size='small'/>
                            Repositories
                            <span className="lower-nav-counter">6</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/" exact component={Overview} />
                <Route path="/Repositories" component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}
