import React, {PureComponent} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './trends.style.css';

class Trends extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <Grid>
        <h1 className="trendsHeader">This week's top trends</h1>
        <Row className="showGrid">
          <Col
            xs={6}
            sm={3}
            className="trendsSquare"
          >
            <div className="trendsTopRecipeImage"></div>
          </Col>
          <Col
            xs={6}
            sm={3}
            className="trendsSquare"
          >
          </Col>
          <Col
            xs={6}
            sm={3}
            className="trendsSquare"
          >
          </Col>
          <Col
            xs={6}
            sm={3}
            className="trendsSquare"
          >
          </Col>

        </Row>
      </Grid>
    )
  }
}

export default Trends