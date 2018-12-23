import React, { Component } from 'react';
import SiteWrapper from '../components/SiteWrapper';
import { Page } from 'tabler-react';

export default class Home extends Component {

  render(){
     return (
       <SiteWrapper>
       <Page>
         <h1>Home Component</h1>
         </Page>
       </SiteWrapper>
     )
  }
}
