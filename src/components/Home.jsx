import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
          <Jumbotron>
              <h1 className="header">Godel Systems Inc.</h1>
              <p className="header-secondary">Software, as you need it.</p>
             <Link to="/about">
               <Button bsStyle="primary">Learn more</Button>
             </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="idk">
              <h3>Choose Godel Systems Inc.</h3>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>About</h3>
              <p>Learn why you should choose to go with Godel.</p>
              <p><a href="/about">Read more</a></p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>News</h3>
              <p>Keep up-to-date with our news and get insights into our latest projects.</p>
              <p><a href="/news">Read more</a></p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Blog</h3>
              <p>Read our tutorials and our thoughts about things.</p>
              <p><a href="/blog">Read more</a></p>
            </Col>
          </Row>
      </Grid>
    )
  }
};