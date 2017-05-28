import React from "react";
import { Link } from 'react-router'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Layout</h1>
        <Link to="archives">archives</Link>
      </div>
    );
  }
}