import * as React from "react";

import {
  Page,
  Grid,
  Card,
  Form,
  GalleryCard,
  Button
} from "tabler-react";

import SiteWrapper from '../components/SiteWrapper';

function Home() {



  return (
    <SiteWrapper>
      <Page>
        <Page.Content title="Create QR Codes">
          <Grid.Row cards={true}>
            <Grid.Col lg={6}>
            <Card className="p-5 align-items-center">
              <Form>

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

                <Form.Group label="Design">
                  <Form.ImageCheck>
                    <Form.ImageCheckItem
                      value={1}
                      imageURL="http://tabler-react.com/demo/photos/nicolas-picard-208276-500.jpg"
                    />
                  </Form.ImageCheck>
                </Form.Group>

              </Form>
            </Card>
            </Grid.Col>
            <Grid.Col lg={6}>
              <GalleryCard className="p-5 align-items-center">
                <GalleryCard.Image
                  src="http://tabler-react.com/demo/photos/nicolas-picard-208276-500.jpg"
                />
                <div>
                <Form.Group label="Download" className="mt-3">
                  <Button className="btn btn-secondary mx-2 badge-pill px-4">PNG</Button>
                  <Button className="btn btn-secondary mx-2 badge-pill px-4">SVG</Button>
                  <Button className="btn btn-secondary mx-2 badge-pill px-4">JPG</Button>
                  <Button className="btn btn-secondary mx-2 badge-pill px-4">PDF</Button>
                  </Form.Group>
                </div>
              </GalleryCard>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </Page>
    </SiteWrapper>
  );
}

export default Home;
