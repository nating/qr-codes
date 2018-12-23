import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Site, Container, Nav, Button, Grid } from 'tabler-react';

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Create",
    icon: "box",
    to: "/create",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "How do they work?",
    icon: "calendar",
    to: "/calendar",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Content",
    icon: "file",
    to: "/content",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Different Types",
    icon: "check-square",
    subItems: [
      { value: "Halftone", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Hidden Text", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Hidden Image", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Stencil", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    LinkComponent: withRouter(NavLink),
  },
];

export default class Header extends Component {

  onMenuToggleClick(){
    console.log('blicked');
  }

  render(){
     return (
     <div className="py-4 text-white">
       <Container>
         <div className="d-flex justify-content-between">

           <Site.Logo href="/" alt="QR Codes" src="./../../my-logo.png" />

           <Grid.Row className="align-items-center">
            <Grid.Col className="col-lg order-lg-first">
              <Nav
                tabbed
                className="border-0 flex-column flex-lg-row"
                itemsObjects={navBarItems}
              />
            </Grid.Col>
          </Grid.Row>

           <div className="d-none d-lg-flex order-lg-2">
             <Nav.Item type="div" className="d-none d-md-flex">
               <Button
                 href="https://github.com/tabler/tabler-react"
                 target="_blank"
                 outline
                 size="sm"
                 RootComponent="a"
                 color="primary"
                 className="badge-pill p-3"
               >
                 Source code
               </Button>
             </Nav.Item>
           </div>
           <a
             className="header-toggler d-lg-none ml-3 ml-lg-0"
             onClick={this.onMenuToggleClick}
           >
             <span className="header-toggler-icon" />
           </a>
         </div>
       </Container>
     </div>
    )
  }
}
