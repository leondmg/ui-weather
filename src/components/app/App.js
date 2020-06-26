import "bootswatch/dist/darkly/bootstrap.css";
import React, { Component } from 'react';
import WheatherDisplay from '../weather_display/WeatherDisplay'
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const PLACES = [
  { name: "Kazan", zip: "551487" },
  { name: "Naberezhnye Chelny", zip: "523750" },
  { name: "Nizhnekamsk", zip: "521118" },
  { name: "Almetyevsk", zip: "582432" },
  { name: "Zelenodolsk", zip: "463835" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlace: 0
    };
  }

  render () {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h2 className='headline'>Weather in Tatarstan</h2>
              <hr/>
            </Col>
          </Row>
          
          <Row>
            <Col lg="4" md="3" sm = "12">
              <ListGroup
                activeKey={activePlace}
                onSelect={index => {this.setState({ activePlace: index });}}
                >
                  {PLACES.map((place, index) => (
                  <ListGroupItem key={index} eventKey={index}>{place.name}</ListGroupItem>))}
                </ListGroup>
            </Col>
            <Col lg="8" md="9" sm="12">
              <WheatherDisplay key={activePlace} zip={PLACES[activePlace].zip}></WheatherDisplay>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
