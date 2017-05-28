import React from "react";
import { Link } from 'react-router'

export default class Layout extends React.Component {
  navigate() {
    console.log(this.props.route.path)
    this.props.history.pushState(null, "/")
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>Layout</h1>
        {this.props.children}
        <Link to="archives" class="btn btn-info">archives</Link>
        <Link to="settings"><button>settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}