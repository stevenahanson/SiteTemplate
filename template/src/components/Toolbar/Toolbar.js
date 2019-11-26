import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <>
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">USE ROUTER HERE</a></li> 
                    <li><a href="/">USE ROUTER HERE</a></li> 
                </ul>
            </div>
        </nav>
    </header>
    {/* <style jsx>
        {`
            
        `}
    </style> */}
    </>
);

export default toolbar;