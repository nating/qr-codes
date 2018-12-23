import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

class SiteWrapper extends React.Component<Props, State> {

  render(): React.Node {
    return (
      <div style={{height:'100%'}}>
          <Header/>
          <div>
            {this.props.children}
          </div>
          <Footer/>
        </div>
    );
  }
}

export default SiteWrapper;
