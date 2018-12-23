import React, { Component } from "react";
import { Page, Grid, Card, Form, GalleryCard, Button } from "tabler-react";
import SiteWrapper from '../components/SiteWrapper';
import QRCode from '../lib/QRCode';

export default class Create extends Component {
    constructor() {
        super();
        this.state={
            type: 'style',
            content: 'url',
            url: 'nating.io',
            color: 'block',
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

  render() {
    return (
      <SiteWrapper>
        <Page>
          <Page.Content title="Create QR Codes">
            <Grid.Row cards={true}>
              <Grid.Col lg={6}>
              <Card className="p-5 align-items-center">
                <Form autoComplete="false">

                  <Form.Group label="Type">

                  <Grid.Row gutters="xs">
                    <Grid.Col>
                      <Form.Select>
                        <option>Styled</option>
                        <option>Halftone</option>
                        <option>Hidden Text</option>
                        <option>Hidden Image</option>
                        <option>Stencil</option>
                      </Form.Select>
                    </Grid.Col>
                    <Grid.Col auto className="align-self-center">
                      <Form.Help
                        message={
                          <React.Fragment>
                              <a href="https://yahbingle.com">USP ZIP codes lookup tools</a>
                          </React.Fragment>
                        }
                      />
                    </Grid.Col>
                  </Grid.Row>
                  </Form.Group>

                  <Form.Group label="Content">
                    <Form.Select>
                      <option>URL</option>
                      <option>Text</option>
                      <option>Email</option>
                      <option>Phone</option>
                      <option>Contact</option>
                      <option>SMS</option>
                      <option>Location</option>
                      <option>Event</option>
                      <option>Bitcoin</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group label="URL">
                    <Form.Input name="example-text-input" placeholder="https://" />
                  </Form.Group>

                  <Form.Group label="Color">
                    <Form.SelectGroup>
                      <Form.SelectGroupItem name="size" label="Block" value="50" />
                      <Form.SelectGroupItem name="size" label="Linear Gradient" value="100" />
                      <Form.SelectGroupItem name="size" label="Radial Gradient" value="150" />
                    </Form.SelectGroup>
                  </Form.Group>

                  <Form.Group>
                    <Form.ColorCheck>
                      <Form.ColorCheckItem color="azure" />
                      <Form.ColorCheckItem color="indigo" />
                      <Form.ColorCheckItem color="purple" />

                      <Form.ColorCheckItem color="pink" />
                      <Form.ColorCheckItem color="red" />
                      <Form.ColorCheckItem color="orange" />

                      <Form.ColorCheckItem color="lime" />
                      <Form.ColorCheckItem color="green" />
                      <Form.ColorCheckItem color="teal" />

                      <Form.ColorCheckItem color="yellow" />
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
                  <QRCode content="hello world" codeStyle="sharp" innerEyeStyle="circle" linearGradient={['rgb(199,189,253)','rgb(18,14,47)']} gradientRotation={90} size={300}/>
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
