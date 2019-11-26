import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <>
        <header>
          <ul id="headerButtons">
            <li className="navButton"><Link to="">Home</Link></li>
          </ul>
        </header>
        <div>
        <style jsx>
          {`
            header {
              display: grey;
              background-color: grey;
              width: 100%;
              height: 50px;
              color: white;
            }
            #headerButtons {
              list-style-type: none;
              margin: 0;
              padding: 0;
            }
            .navButton {
              float: right;
              &:hover {
                background-color: black;
              }
            }
          `}
        </style>
        </div>
      </>
    )
}
}
export default NavBar;