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
    value: "Other",
    icon: "box",
    subItems: [
      {
        value: "About",
        to: "/about",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Team",
        to: "/team",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile", LinkComponent: withRouter(NavLink) },
      { value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
      {
        value: "Register",
        to: "/register",
        LinkComponent: withRouter(NavLink),
      },
      {
        value: "Forgot password",
        to: "/forgot-password",
        LinkComponent: withRouter(NavLink),
      },
      { value: "400 error", to: "/400", LinkComponent: withRouter(NavLink) },
      { value: "401 error", to: "/401", LinkComponent: withRouter(NavLink) },
      { value: "403 error", to: "/403", LinkComponent: withRouter(NavLink) },
      { value: "404 error", to: "/404", LinkComponent: withRouter(NavLink) },
      { value: "500 error", to: "/500", LinkComponent: withRouter(NavLink) },
      { value: "503 error", to: "/503", LinkComponent: withRouter(NavLink) },
      { value: "Email", to: "/email", LinkComponent: withRouter(NavLink) },
      {
        value: "Empty page",
        to: "/empty-page",
        LinkComponent: withRouter(NavLink),
      },
      { value: "RTL", to: "/rtl", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: withRouter(NavLink),
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
