import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div class="text-center footer">
        <p>&copy; Teamex 2019</p>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Careers</a>
      </div>
    )
  }
};