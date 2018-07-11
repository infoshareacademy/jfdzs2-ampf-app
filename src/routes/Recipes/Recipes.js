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
        const quantityOfFoundRecipes = 4;
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
            <Col xs={12} sm={6} className='foundRecipe'
                 key={item.id}>

                    <h4>{item.title}</h4>
                <Link to={'/SingleRecipe/'+item.id}>
                    <Image
                    src={item.image}
                    alt='Recipe image'
                    className='foundRecipe-image'
                    thumbnail
                    />
                </Link>
            </Col>
        );

    render() {
        return (
            <Fragment>
                <Header/>
                <Grid className='recipes-route'>
                    <h2>Found Recipes</h2>
                    <Row className='show-grid'>
                        {this.renderRecipes()}
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Recipes;