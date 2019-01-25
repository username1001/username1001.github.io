import React, { Component } from 'react';
import {  Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
          <Image src="assets/cosmos.jpg" className="header-image" />
          <Grid>
            <Col xs={12} sm={8} smOffset={2}>
              {/* <Image src="assets/cosmos.jpg" className="about-profile-pic" rounded /> */}
              <h3>About the team</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo porro molestiae natus sunt incidunt autem reiciendis animi esse, perferendis architecto voluptate excepturi ipsa corporis error delectus minus deserunt beatae dolorem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum sit, nostrum voluptates enim numquam itaque, asperiores rem quo id hic facere? Optio ad accusantium quisquam quaerat aliquam! Adipisci, earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error laudantium quos, ab autem porro et vel, quam ea fuga quibusdam nesciunt provident, explicabo consectetur voluptas aperiam aliquam quidem harum voluptatum?</p>
            </Col>
          </Grid>
      </div>
    )
  }
}