import React from 'react';
import './Footer.css';
import {MarkGithubIcon} from '@primer/octicons-react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-mrg">
                <ul className="footer-ul">
                    <li style={{color: "#586069"}}>© 2020 GitHub, Inc.</li>
                    <li className="footer-ul-li"><a href="https://github.com/site/terms">Terms</a></li>
                    <li className="footer-ul-li"><a href="https://github.com/site/privacy">Privacy</a></li>
                    <li className="footer-ul-li"><a href="https://github.com/site/security">Security</a></li>
                    <li className="footer-ul-li"><a href="https://github.com/site/status">Status</a></li>
                    <li className="footer-ul-li"><a href="https://github.com/site/help">Help</a></li>
                </ul>
                <a className="footer-github-icon" href="https://github.com/"><MarkGithubIcon size={24} /></a>
                <ul className="footer-ul">
                    <li className="footer-ul-li"><a href="https://github.com/site/contact">Contact GitHub</a></li>
                    <li className="footer-ul-li"><a href="https://github.com/site/pricing">Pricing</a></li>
                    <li className="footer-ul-li"><a href="https://docs.github.com">API</a></li>
                    <li className="footer-ul-li"><a href="https://training.github.com">Training</a></li>
                    <li className="footer-ul-li"><a href="https://github.blog">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}