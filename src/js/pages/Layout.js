import React from "react";
import { Link } from 'react-router'

import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

export default class Layout extends React.Component {
  render() {
    // console.log('layout props', this.props)
    const {location} = this.props
    const containerStyle = {
      marginTop: "60px"
    }

    return (
      <div>

        {/*Nav*/}
        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {/*body*/}
              {this.props.children}

            </div>

            {/*Footer*/}
            <Footer />

          </div>
        </div>
      </div>
    );
  }
}