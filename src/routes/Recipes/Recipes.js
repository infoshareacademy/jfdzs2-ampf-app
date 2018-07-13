import React, {PureComponent, Fragment} from 'react';
import {Image, Row, Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Recipes.style.css';
import Header from "../../components/Header/header.component";

class Recipes extends PureComponent {
    state = {
        foundRecipes: [],
    };

    componentDidMount(){
        const joinedIngredients = this.props.match.params.ingredients;
        const quantityOfFoundRecipes = 6;
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${joinedIngredients}&limitLicense=false&number=${quantityOfFoundRecipes}&ranking=1`,
            {headers: {
                'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
                'Accept':'application/json'
            }}
        )
            .then(response => response.json())
            .then(data => this.setState({
                foundRecipes: data,
            }))
            .catch(error=> console.log(error)
            )

    }

    componentDidUpdate(){
        console.log(
            this.state
        )
    }
    renderRecipes = () =>
        this.state.foundRecipes.map((item)=>
            <Col xs={12} sm={6} lg={4} className='foundRecipe'
                 key={item.id}>

                    <h2 className="foundRecipeTitle">{item.title}</h2>
                <Link to={'/SingleRecipe/'+item.id}>
                    <Image
                    src={item.image}
                    alt='Recipe image'
                    className='foundRecipe-image'
                    rounded
                    thumbnail
                    responsive
                    />
                </Link>
            </Col>
        );

    render() {
        return (
            <Fragment>
                <Header/>
                <Grid className='recipes-route'>
                    <h1>Found Recipes</h1>
                    <Row className='show-grid'>
                        {this.renderRecipes()}
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Recipes;