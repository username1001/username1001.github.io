import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/person.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate qui officia magni mollitia rem voluptatibus est ratione accusamus, ipsa aspernatur possimus obcaecati laudantium eum, accusantium veritatis, deleniti repellat consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi a illo nobis accusamus vitae rerum tempora dicta aspernatur eum deleniti impedit iusto numquam ab, recusandae saepe sunt deserunt expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad perferendis ipsum distinctio eum. Eum voluptatem incidunt cupiditate iste repellat, cum, voluptatibus officia sed dignissimos est odio harum facere sint.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at optio, cum autem, enim eaque nam perspiciatis voluptatibus minus dignissimos quidem quos assumenda. Illum laboriosam, aperiam itaque iusto molestias sapiente.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/person.jpg" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente nemo, quo illo a magnam recusandae sit placeat officiis hic vitae quasi ex praesentium dolores officia veniam, sint quidem perspiciatis.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}