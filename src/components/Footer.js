import React, { Component } from 'react';
import { Container, Nav, Button, Grid, List } from 'tabler-react';

export default class Footer extends Component {

  render(){
     return (
     <footer className="footer">
       <Container>
         <Grid.Row className="align-items-center flex-row-reverse">
           <Grid.Col auto={true} className="ml-auto">
             <Grid.Row className="align-items-center">
               <Grid.Col auto={true}>
                 <List className="list-inline list-inline-dots mb-0">
                   <List.Item className="list-inline-item">
                     <a href="./docs/index.html">Documentation</a>
                   </List.Item>
                   <List.Item className="list-inline-item">
                     <a href="./faq.html">FAQ</a>
                   </List.Item>
                 </List>
               </Grid.Col>
               <Grid.Col auto={true}>
                 <Button
                   href="https://github.com/tabler/tabler-react"
                   size="sm"
                   outline
                   color="primary"
                   RootComponent="a"
                   className="badge-pill p-3"
                 >
                   Source code
                 </Button>
               </Grid.Col>
             </Grid.Row>
           </Grid.Col>
           <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
             Copyright © 2018 <a href="https://github.com/nating">nating</a>. All rights reserved.
           </Grid.Col>
         </Grid.Row>
       </Container>
     </footer>
    )
  }
}
