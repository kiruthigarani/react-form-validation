import React, { Component } from "react";

class RenderCount extends Component {
  constructor(props) {
    super(props);
    this.renderCount = 0;
  }

  render() {
    this.renderCount += 1;
    const { name = "Component" } = this.props;
    return <div>{name} Render Count: {this.renderCount}</div>;
  }
}

export default RenderCount;
