import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import DashboardTitleText from "../DashboardTitleText";
import DashboardStatusText from "../DashboardStatusText";
import CompleteApplicationButton from "../CompleteApplicationButton";

import styles from "./styles.module.css";

const mentorApplicationLink = process.env.REACT_APP_MENTOR_APPLICATION_LINK;

export default class DashboardCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      status: props.status,
      buttonStatus: props.buttonStatus,
    };
  }

  render() {
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className="py-5 my-5">
            {this.props.children}
            <Col className={styles.col}>
              <Row>
                <DashboardTitleText
                  key={this.state.title}
                  text={this.state.title}
                />
              </Row>
              <Row>
                <DashboardStatusText
                  key={this.state.status}
                  type={this.state.status}
                />
              </Row>
              <br />
              <Row>
                <CompleteApplicationButton
                  key={this.state.buttonStatus}
                  text={"Complete Application"}
                  status={this.state.buttonStatus}
                />
              </Row>
              <br />
              <Row>
                <h5>
                  Applying to be a mentor? Submit your application{" "}
                  <a
                    href={mentorApplicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  !
                </h5>
              </Row>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
