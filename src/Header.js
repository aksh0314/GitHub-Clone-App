import React from 'react';
import './App.css';
import {BellIcon, PlusIcon} from '@primer/octicons-react'

export default function Header() {

    return (
        <div className="header">
            <div className="header-lft">
                <img src="./img/GitHub-Mark-Light-32px.png" alt=""/>
                <input type="text" name="search" id="search" placeholder="Search or jump to…"/>
                {/* <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2 header-search-key-slash" /> */}
                
                <a className="header-navtxt" href="https://github.com/pulls">Pull requests</a>
                <a className="header-navtxt" href="https://github.com/issues">Issues</a>
                <a className="header-navtxt" href="https://github.com/marketplace">Marketplace</a>
                <a className="header-navtxt" href="https://github.com/explore">Explore</a>
            </div>
            <div className="header-rht">
                <BellIcon size={16} />
                <div className="dropdown">
                    <button><PlusIcon size={16} /></button>
                    <label>
                        <input type="checkbox" />
                        <div className="header-showUl">
                            <ul>
                                <li>New repository</li>
                                <li>Import repository</li>
                                <li>New gist</li>
                                <li>New organization</li>
                                <li>New project</li>
                            </ul>
                        </div>
                    </label>
                </div>
                <div className="dropdown">
                    <button className="header-avatar">
                        <img className="header-avatar-image" src="https://avatars0.githubusercontent.com/u/26006330?v=4" alt="avatar"/> 
                    </button>
                    <label>
                        <input type="checkbox" />
                        <div className="header-showUl">
                            <p>Signed in as <strong>shalabhsingh</strong></p>
                            <div className="divider" />
                            <p>Set Status</p>
                            <div className="divider" />
                            <ul>
                                <li>Your profile</li>
                                <li>AYour repositories</li>
                                <li>Your projects</li>
                                <li>Your stars</li>
                                <li>Your gists</li>
                                <li className="divider"></li>
                                <li>Upgrade</li>
                                <li>Help</li>
                                <li>Settings</li>
                                <li>Sign out</li>
                            </ul>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
