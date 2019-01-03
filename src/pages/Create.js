import React, { Component } from "react";
import { Page, Grid, Card, Form, Button } from "tabler-react";
import SiteWrapper from '../components/SiteWrapper';
import QRCode from '../lib/QRCode';

export default class Create extends Component {
    constructor() {
        super();
        this.state={
            type: 'style',
            content: 'url',
            url: 'nating.io',
            text: 'no content',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            email: '',
            sms: '',
            color: 'block',
            description: '',
            starttime: '',
            endtime: '',
            gradientColorA: undefined,
            gradientColorB: undefined,
            fileType: 'SVG',
            fileSize: '1000px',
        }
     }

  // https://stackoverflow.com/a/46403589/7852784 (edited)
  downloadSvg(name) {
    var svgEl = document.getElementsByTagName('svg')[0];
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    console.log("saved");
  }

  // This works on the second time the download button is clicked, but not the first time
  // First time, the image is drawn. Seconde time, the canvas is drawn
  downloadLast(){
    var svg = document.getElementsByTagName('svg')[0];
    var img = document.getElementById('img');
    var canvas = document.getElementById('canvas');

    // get svg data
    var xml = new XMLSerializer().serializeToString(svg);

    // make it base64
    var b64Start = 'data:image/svg+xml;base64,';
    var svg64 = btoa(xml);

    // prepend a "header"
    var image64 = b64Start + svg64;

    // set it as the source of the img element
    img.height = 300;
    img.width = 300;
    img.src = image64;

    // draw the image onto the canvas
    canvas.getContext('2d').drawImage(img, 0, 0);

    var dt = canvas.toDataURL('image/png'); // << this fails in IE/Edge...
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');

    var downloadLink = document.createElement('a');
    console.log(dt);
    downloadLink.href = dt;
    downloadLink.download = 'post-dinner.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  // Unchecks all other inputs of the radio
  radioOnChange(obj){

  }

  renderContentFields(){
    switch(this.state.content){
      case 'url': return this.renderUrlContentFields();
      case 'text': return this.renderTextContentFields();
      case 'email': return this.renderEmailContentFields();
      case 'phone': return this.renderPhoneContentFields();
      case 'contact': return this.renderContactContentFields();
      case 'sms': return this.renderSMSContentFields();
      case 'location': return this.renderLocationContentFields();
      case 'event': return this.renderEventContentFields();
      default: return this.renderUrlContentFields();
    }
  }

  // TODO: must to validation on these fields
  renderUrlContentFields() {
    return (
      <Form.Group label="URL">
        <Form.Input name="url" placeholder="https://" onChange={(e)=>this.setState({url:e.target.value})} value={this.state.url}/>
      </Form.Group>
    )
  }

  renderTextContentFields() {
    return (
      <Form.Group label="Text">
        <Form.Input name="text" placeholder="Your text here..." onChange={(e)=>this.setState({text:e.target.value})} value={this.state.text}/>
      </Form.Group>
    )
  }

  renderEmailContentFields() {
    return (
      <Form.Group label="Email Address">
        <Form.Input name="email" placeholder="name@company.com" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
      </Form.Group>
    )
  }

  renderPhoneContentFields() {
    return (
      <Form.Group label="Phone Number">
        <Form.Input name="phone" placeholder="+353861234567" onChange={(e)=>this.setState({phone:e.target.value})} value={this.state.phone}/>
      </Form.Group>
    )
  }

  renderContactContentFields() {
    return (
      <React.Fragment>
        <Form.Group label="First Name">
          <Form.Input name="firstname" placeholder="Mark" onChange={(e)=>this.setState({firstname:e.target.value})} value={this.state.firstname}/>
        </Form.Group>
        <Form.Group label="Last Name">
          <Form.Input name="lastname" placeholder="Murtagh" onChange={(e)=>this.setState({lastname:e.target.value})} value={this.state.lastname}/>
        </Form.Group>
        <Form.Group label="Address">
          <Form.Input name="address" placeholder="1738 Fake Street, Dublin, Ireland" onChange={(e)=>this.setState({address:e.target.value})} value={this.state.address}/>
        </Form.Group>
        <Form.Group label="Phone Number">
          <Form.Input name="phone" placeholder="+353861234567" onChange={(e)=>this.setState({phone:e.target.value})} value={this.state.phone}/>
        </Form.Group>
        <Form.Group label="Email">
          <Form.Input name="email" placeholder="name@company.com" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
        </Form.Group>
      </React.Fragment>
    )
  }

  renderSMSContentFields() {
    return (
      <Form.Group label="Phone Number">
        <Form.Input name="sms" placeholder="+353861234567" onChange={(e)=>this.setState({sms:e.target.value})} value={this.state.sms}/>
      </Form.Group>
    )
  }

  renderLocationContentFields() {
    return (
      <React.Fragment>
        <Form.Group label="Latitude">
          <Form.Input name="latitude" placeholder="53.3498" onChange={(e)=>this.setState({latitude:e.target.value})} value={this.state.latitude}/>
        </Form.Group>
        <Form.Group label="Longitude">
          <Form.Input name="longitude" placeholder="6.2603" onChange={(e)=>this.setState({longitude:e.target.value})} value={this.state.longitude}/>
        </Form.Group>
      </React.Fragment>
    )
  }

  renderEventContentFields() {
    return (
      <React.Fragment>
        <Form.Group label="Description">
          <Form.Input name="description" placeholder="Event description here..." onChange={(e)=>this.setState({description:e.target.value})} value={this.state.description}/>
        </Form.Group>
        <Form.Group label="Start Date & Time">
          <Form.MaskedInput
            name="starttime"
            placeholder="17/3/2008 17:38:00"
            onChange={(e)=>this.setState({starttime:e.target.value})} value={this.state.starttime}
            mask={[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/,]}
          />
        </Form.Group>
        <Form.Group label="End Date & Time">
          <Form.MaskedInput
             name="endtime"
             placeholder="17/3/2008 17:38:59"
             onChange={(e)=>this.setState({endtime:e.target.value})} value={this.state.endtime}
             mask={[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/,]}
          />
        </Form.Group>
      </React.Fragment>
    )
  }

  //https://github.com/zxing/zxing/wiki/Barcode-Contents
  getContentValue() {
    switch(this.state.content){
      case 'url': return this.state.url;
      case 'text': return this.state.text;
      case 'email': return 'mailto:'+this.state.email;
      case 'phone': return 'tel:'+this.state.phone;
      case 'contact':
        var contact = 'MECARD:';
        contact += (this.state.lastname || this.state.firstname) ? 'N:'+this.state.lastname+(this.state.firstname?','+this.state.firstname:'')+';' : '';
        contact += this.state.address? 'ADR:'+this.state.address+';' : '';
        contact += this.state.phone? 'TEL:'+this.state.phone+';' : '';
        contact += 'EMAIL:'+this.state.email+';';
        contact += ';';
        return contact;
      case 'sms': return 'sms:'+this.state.sms;
      case 'location': return 'geo:'+this.state.latitude+','+this.state.longitude;
      case 'event':
        var utcStartDate = new Date(this.state.starttime).toUTCString();
        var utcEndDate = new Date(this.state.endtime).toUTCString();
        var event = 'BEGIN:VEVENT\nSUMMARY:'+this.state.description;
        event += '\nDTSTART:'+utcStartDate;
        event += '\nDTEND:'+utcEndDate;
        event += '\nEND:VEVENT';
        return event;
      default: return this.state.url;
    }
  }

  render() {
    return (
      <SiteWrapper>
        <Page>
          <Page.Content title="Create QR Codes">
            <Grid.Row cards={true}>

              {/* Form Column */}
              <Grid.Col lg={6}>
                <Card className="p-5 align-items-center">
                  <Form autoComplete="false">
                    <Form.Group label="Type">
                      <Grid.Row gutters="xs">
                        <Grid.Col>
                          <Form.Select name="type" onChange={(e)=>this.setState({type:e.target.value})} value={this.state.type}>
                            <option>Styled</option>
                            <option>Halftone</option>
                            <option>Hidden Text</option>
                            <option>Hidden Image</option>
                            <option>Stencil</option>
                          </Form.Select>
                        </Grid.Col>
                        <Grid.Col auto className="align-self-center">
                          <Form.Help/>
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>

                    <Form.Group label="Content">
                      <Form.Select name="content" onChange={(e)=>this.setState({content:e.target.value})} value={this.state.content}>
                        <option value="url">URL</option>
                        <option value="text">Text</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="contact">Contact</option>
                        <option value="sms">SMS</option>
                        <option value="location">Location</option>
                        <option value="event">Event</option>
                      </Form.Select>
                    </Form.Group>

                    {this.renderContentFields()}

                    <Form.Group label="Color">
                      <Form.SelectGroup name="color" onChange={(e)=>this.setState({color:e.target.value})} value={this.state.color}>
                        <Form.SelectGroupItem name="color" label="Block" value="block" />
                        <Form.SelectGroupItem name="color" label="Linear Gradient" value="linearGradient" />
                        <Form.SelectGroupItem name="color" label="Radial Gradient" value="radialGradient" />
                      </Form.SelectGroup>
                    </Form.Group>

                    <Form.Group>
                      <Form.ColorCheck className="form-inline" onChange={(e)=>this.setState({gradientColorA:e.target.value})} value={this.state.gradientColorA}>
                        <Form.Input class="w-25" name="gradientColorA" placeholder="#000E2F" onChange={(e)=>this.setState({gradientColorA:e.target.value})} value={this.state.gradientColorA}/>

                        <Form.ColorCheckItem color="azure" />
                        <Form.ColorCheckItem color="indigo" />
                        <Form.ColorCheckItem color="purple" />

                        <Form.ColorCheckItem color="pink" />
                        <Form.ColorCheckItem color="red" />
                        <Form.ColorCheckItem color="orange" />

                        <Form.ColorCheckItem color="lime" />
                        <Form.ColorCheckItem color="green" />
                        <Form.ColorCheckItem color="teal" />

                      </Form.ColorCheck>
                    </Form.Group>

                    <Form.Group label="Logo">
                      <Form.ImageCheck>
                        <Form.ImageCheckItem
                          value={1}
                          imageURL="http://tabler-react.com/demo/photos/nicolas-picard-208276-500.jpg"
                        />
                      </Form.ImageCheck>
                    </Form.Group>

                    <Form.Group label="Code Style">
                      <Form.ImageCheck>
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="1"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="2"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="3"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="4"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="5"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="6"
                          col={{ sm: 2 }}
                        />
                      </Form.ImageCheck>
                    </Form.Group>

                    <Form.Group label="Inner-eye Style">
                      <Form.ImageCheck>
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="1"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="2"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="3"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="4"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="5"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="6"
                          col={{ sm: 2 }}
                        />
                      </Form.ImageCheck>
                    </Form.Group>

                    <Form.Group label="Outer-eye Style">
                      <Form.ImageCheck>
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="1"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="2"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="3"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="4"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="5"
                          col={{ sm: 2 }}
                        />
                        <Form.ImageCheckItem
                          imageURL="https://avatars1.githubusercontent.com/u/16880181?s=460&v=4"
                          value="6"
                          col={{ sm: 2 }}
                        />
                      </Form.ImageCheck>
                    </Form.Group>

                  </Form>
                </Card>
              </Grid.Col>

              <Grid.Col lg={6}>
                <Card className="p-5 align-items-center">
                  <img alt="" className="d-none" id="img" width={300} height={300}/>
                  <canvas id="canvas" className="d-none"  width={300} height={300}/>
                  <QRCode content={this.getContentValue()} codeStyle="sharp" innerEyeStyle="circle" linearGradient={['rgb(199,189,253)','rgb(18,14,47)']} gradientRotation={90} size={300}/>
                <Form>

                  <Form.Group label="File Size">
                    <Form.SelectGroup>
                      <Form.SelectGroupItem name="file-size" label="250px" value="250" />
                      <Form.SelectGroupItem name="file-size" label="500px" value="500" />
                      <Form.SelectGroupItem name="file-size" label="1000px" value="1000" />
                      <Form.SelectGroupItem name="file-size" label="1500px" value="1500" />
                      <Form.SelectGroupItem name="file-size" label="2000px" value="2000" />
                    </Form.SelectGroup>
                  </Form.Group>

                  <Form.Group label="File Type">
                    <Form.SelectGroup>
                      <Form.SelectGroupItem name="file-type" label="PNG" value="50" />
                      <Form.SelectGroupItem name="file-type" label="SVG" value="100" />
                      <Form.SelectGroupItem name="file-type" label="JPG" value="150" />
                      <Form.SelectGroupItem name="file-type" label="PDF" value="150" />
                    </Form.SelectGroup>
                  </Form.Group>

                  <div className="text-center">
                    <Button type="button" onClick={()=>this.downloadLast()} className="btn btn-primary mx-2 badge-pill px-4 py-2">
                        Download
                    </Button>
                    </div>

                  </Form>
                </Card>
              </Grid.Col>

            </Grid.Row>
          </Page.Content>
        </Page>
      </SiteWrapper>
    );
  }
}
