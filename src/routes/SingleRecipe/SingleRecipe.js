import React, {Fragment, PureComponent} from 'react';
import {Image} from 'react-bootstrap';






class SingleRecipe extends PureComponent {

    state = {
        analizedRecipeInstruction: {},
        recipeInformation: {}
    };

    recipeID = this.props.match.params.id;

    componentDidMount(){
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${this.recipeID}/analyzedInstructions?stepBreakdown=true`,
            {headers: {
                'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
                'Accept':'application/json'
            }}
        )
            .then(response => response.json())
            .then(data => this.setState({
                analizedRecipeInstruction: data,
            }))
            .catch(error=> console.log(error)
            );

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
        )
    }

    render() {
        return (
            <Fragment>
                <Image src={this.state.recipeInformation.image} />
            </Fragment>
        );
    }
}

export default SingleRecipe;