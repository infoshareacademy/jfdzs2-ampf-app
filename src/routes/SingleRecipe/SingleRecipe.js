import React, {Fragment, PureComponent} from 'react';
import {Image, Col, Row, Grid} from 'react-bootstrap';

import './SingleRecipe.style.css';





class SingleRecipe extends PureComponent {

    state = {
        analizedRecipeInstruction: {},
        recipeInformation: {}
    };

    recipeID = this.props.match.params.id;

    componentDidMount(){
        // fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${this.recipeID}/analyzedInstructions?stepBreakdown=true`,
        //     {headers: {
        //         'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
        //         'Accept':'application/json'
        //     }}
        // )
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         analizedRecipeInstruction: data,
        //     }))
        //     .catch(error=> console.log(error)
        //     );

        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${this.recipeID}/information?includeNutrition=true'`,
            {headers: {
                'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
                'Accept':'application/json'
            }}
        )
            .then(response => response.json())
            .then(data => this.setState({
                recipeInformation: data,
            }))
            .catch(error=> console.log(error)
            )
    }

    componentDidUpdate(){
        console.log(
            this.state
        );
        console.log(
            this.state.recipeInformation.analyzedInstructions[0]
        )
    }

    renderIngredients = () => {
        this.state.recipeInformation.extendedIngredients.map((item) =>
            <Col xs={4} sm={3} md={2} lg={1} className='single-recipe-OneIngredient'>
                <div>
                    ammount
                </div>
                    <Image src={'https://spoonacular.com/cdn/ingredients_100x100/'+item.image} />
                <div>
                    {item.name}
                </div>
            </Col>
        )
    };

    renderInstructions = () => {
        const instructions = this.state.recipeInformation.analyzedInstructions[0];
        instructions.steps.map((item) =>
            <div key={item.number}>
                <Col xs={1}>
                    <div className='single-recipe-InstructionNumber'>{item.number}</div>
                </Col>
                <Col xs={10} xsPush={1} className='single-recipe-InstructionInformation'>
                    {item.step}
                </Col>
            </div>
        );
    };



    render() {
        return (
            <Fragment>
                <Grid className='single-recipe-Main'>
                    <h2>{this.state.recipeInformation.title}</h2>
                    <Row className='show-grid'>
                        <Col xs={12} className='single-recipe-RecipeImage'>
                            <Image src={this.state.recipeInformation.image}/>
                        </Col>
                    </Row>
                </Grid>
                <Grid className='single-recipe-Main'>
                    <Row className='show-grid single-recipe-Icons'>
                        <Col xs={4} className='single-recipe-SingleIcon'>
                            <Image src='https://spoonacular.com/application/frontend/images/badges/cheap.svg'/>
                            <div>{this.state.recipeInformation.pricePerServing}$ for {this.state.recipeInformation.servings} servings</div>
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
                    <Row className='show-grid '>
                        <h3 className='single-recipe-Instructions'>Instructions:</h3>
                        {this.renderInstructions()}
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default SingleRecipe;