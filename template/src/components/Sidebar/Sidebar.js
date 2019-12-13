import React from 'react';

import './Sidebar.css';

const sideBar = props => {
    let sidebarClasses = ['side-bar'];

    if(props.show) {
        sidebarClasses = ['side-bar open'];
    }

    return (<nav className={sidebarClasses}>
        <ul>
            <li><a href="/">USE ROUTER HERE</a></li>
            <li><a href="/">USE ROUTER HERE</a></li>
        </ul>
    </nav>
    );
};

export default sideBar;