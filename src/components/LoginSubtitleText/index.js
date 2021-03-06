import React, { Component } from "react";

import styles from "./styles.module.css";

export default class LoginTitleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  render() {
    return <p className={styles.text}>{this.state.text}</p>;
  }
}
