import React, { Component } from "react";
import { observer } from "mobx-react";

export class _Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { foo: "hi" };
  }
  render() {
    console.log("STATE IS", this.state);
    return <div>{this.state.foo}!!</div>;
  }
}

export const Widget = observer(_Widget);
