import React from "react";

export default class Archives extends React.Component {
  render() {
      console.log(this.props)
    return (
      <h1>Archives ({this.props.params.article})</h1>
    );
  }
}