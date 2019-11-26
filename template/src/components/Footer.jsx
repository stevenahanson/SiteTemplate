import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
      <footer>
        <div>
          Footer component
        </div>
      </footer>
      <style jsx>
        {`
        footer {
          display: block;
          width: 100%;
          height: 50px;
          background-color: black;
          color: white;
        }
        `}
      </style>
      </>
    )
  }
}
export default Footer;