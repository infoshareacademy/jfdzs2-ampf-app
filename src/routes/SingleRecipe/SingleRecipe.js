import React, {Fragment, PureComponent} from 'react';
import {Image, Col, Row, Grid} from 'react-bootstrap';

import Loading from '../../components/Loading/Loading.component';

import './SingleRecipe.style.css';


class SingleRecipe extends PureComponent {

    state = {
        recipeNutrition: '',
        recipeInformation: {},
        isLoaded: false,
    };

    recipeID = this.props.match.params.id;

    componentDidMount() {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${this.recipeID}/nutritionWidget?defaultCss=false`,
            {headers: {
                'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
                'Accept':'text/html'
            }}
        )
            .then(response => response.text())
            .then(data => this.setState({
                recipeNutrition: data,
            }))
            .catch(error=> console.log(error)
            );

        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${this.recipeID}/information?includeNutrition=true'`,
            {
                headers: {
                    'X-Mashape-Key': 'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => this.setState({
                recipeInformation: data,
                isLoaded: true
            }))
            .catch(error => console.log(error)
            )
    }

    componentDidUpdate() {
        console.log(
            this.state
        );
        console.log(
            this.state.recipeInformation.analyzedInstructions[0]
        )
    }

    renderIngredients = () =>
        this.state.recipeInformation.extendedIngredients.map((item, index) =>
            <Col xs={6} sm={4} md={3} lg={2} className='single-recipe-OneIngredient' key={index + 1}>
                <div>
                    {item.measures.metric.amount} {item.measures.metric.unitShort}
                </div>
                <Image src={'https://spoonacular.com/cdn/ingredients_100x100/' + item.image}/>
                <div>
                    {item.name}
                </div>
            </Col>
        );

    renderInstructions = () =>
        this.state.recipeInformation.analyzedInstructions[0].steps.map((item) =>
            <Col xs={12} key={item.number} className='single-recipe-Instruction'>
                <Col xs={2} className='single-recipe-InstructionNumber'>
                    <p>{item.number}</p>
                </Col>
                <Col xs={10} className='single-recipe-InstructionInformation'>
                    <p>{item.step}</p>
                </Col>
            </Col>
        );


    render() {
        return (
            this.state.isLoaded ?
                <Fragment>
                    <Grid className='single-recipe-Main'>
                        <h2>{this.state.recipeInformation.title}</h2>
                        <Row className='show-grid'>
                            <Col xs={12} className='single-recipe-RecipeImage'>
                                <Image src={this.state.recipeInformation.image} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid className='single-recipe-Main'>
                        <Row className='show-grid single-recipe-Icons'>
                            <Col xs={4} className='single-recipe-SingleIcon'>
                                <Image src='https://spoonacular.com/application/frontend/images/badges/cheap.svg'/>
                                <div>{this.state.recipeInformation.pricePerServing}$
                                    for {this.state.recipeInformation.servings} servings
                                </div>
                            </Col>
                            <Col xs={4} className='single-recipe-SingleIcon'>
                                <Image src='https://spoonacular.com/application/frontend/images/badges/popular.svg'/>
                                <div>{this.state.recipeInformation.aggregateLikes} likes</div>
                            </Col>
                            <Col xs={4} className='single-recipe-SingleIcon'>
                                <Image src='https://spoonacular.com/application/frontend/images/badges/fast.svg'/>
                                <div>Ready in {this.state.recipeInformation.readyInMinutes} minutes</div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid className='single-recipe-Main'>
                        <Row className='show-grid'>
                            <Col xs={12} className='single-recipe-Ingredients'>
                                <h3>Ingredients:</h3>
                                <h4>Servings: {this.state.recipeInformation.servings}</h4>
                            </Col>
                            {this.renderIngredients()}
                        </Row>
                    </Grid>
                    <Grid className='single-recipe-Main'>
                        <Row className='show-grid'>
                            <h3 className='single-recipe-Instructions'>Instructions:</h3>
                            {this.renderInstructions()}
                        </Row>
                    </Grid>
                </Fragment> :
                <Loading/>
        );
    }
}

export default SingleRecipe;