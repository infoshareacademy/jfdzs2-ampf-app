import React, {PureComponent} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import './trends.style.css';
// import data from './spoonacular-api';

class Trends extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      randomRecipesData: [],
      firstFourRecipes: [],
      secondFourRecipes: [],
      isClicked: false,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=8',
      {headers: {
          'X-Mashape-Key': '4Q74Ky6hJRmshxUHMmqCCII4jFrtp1i1WNHjsnHvz2eJMOyJBi',
          'Accept': 'application/json',
        }}
    )
      .then(response => response.json()
      )
      .then(data => this.setState({
        randomRecipesData: data.recipes,
        firstFourRecipes: data.recipes.slice(0,4),
        secondFourRecipes: data.recipes.slice(4,8),
        isLoaded: true,
        })
      )
      .catch(error => console.log('error')
      );
  };

  toggleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
      })
    );
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  renderRecipeData = (array) => array.map((recipe, index) =>
    <Col
      className="trendRecipeContainer"
      key={index}
      xs={12}
      sm={6}
    >
      <h2 className="trendsRecipeTitle">{recipe.title}</h2>
      <Image
        className="trendsImage"
        src={recipe.image}
        rounded
        thumbnail
        responsive
      />
    </Col>
  );

  render() {
    const isClicked = this.state.isClicked;
    let button;

    if (isClicked) {
      button =
        <Button
          className="trendsSeeMoreButton"
          onClick={this.toggleClick}
          bsStyle="success"
          bsSize="large"
        >See less
        </Button>
    } else {
      button =
        <Button
          className="trendsSeeMoreButton"
          onClick={this.toggleClick}
          bsStyle="success"
          bsSize="large"
        >See more
        </Button>
    }

    let extraRecipes;
    if (isClicked) {
      extraRecipes = this.renderRecipeData(this.state.secondFourRecipes);
    } else {
      extraRecipes = null;
    }

    return(
      <Grid>
        <h1 className="trendsHeader">This week's top trends</h1>
        <Row className="show-grid">
          {this.renderRecipeData(this.state.firstFourRecipes)}
          {extraRecipes}
        </Row>

        <Row className="show-grid trendsSeeMoreRow">
          <Col xs={12}>
            {button}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Trends