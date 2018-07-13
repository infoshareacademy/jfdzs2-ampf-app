import ListOfChosenIgredients from '../../components/ListOfChosenIgredients/ListOfChosenIngredients.component';
import {Button, FormControl, Grid, Row, Col, Image, FormGroup} from 'react-bootstrap';
import React, {PureComponent, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/Header/header.component";

import Search from "../../utils/images/search.png";
import SearchWhite from "../../utils/images/search-white.png";

import "./SearchByIngredient.style.css";




class SearchByIngredient extends PureComponent {
    state = {
        chosenIngredient: '',
        allIngredients: [],
        foundRecipes: [],
    };


    addIngredient = () => {
        this.setState({
            allIngredients: [...this.state.allIngredients, this.state.chosenIngredient],
            chosenIngredient: '',
        })
    };

    changeValue = (e) => {
        this.setState({
            chosenIngredient: e.target.value
        })
    };

    handleButtonPress = (event) => {
        if (event.charCode === 13) this.addIngredient()
    };



    // fetchForIngredients = () => {
    //     let joinedIngredients = this.state.allIngredients.join('%2C');
    // fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${joinedIngredients}&limitLicense=false&number=3&ranking=1`,
    //             {headers: {
    //                 'X-Mashape-Key':'HLjFUpQGdUmshWEfsprU3wV6pi9Ap1ccBUvjsntswHq0ADcQun',
    //                 'Accept':'application/json'
    //             }}
    //         )
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             foundRecipes: data,
    //         }))
    //         .catch(error=> console.log(error)
    //         )
    // };

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Grid className='feature_search_by_ingredient'>
                    <h2>
                        <Image className="search_image"
                               src={Search}
                               alt='Search Icon'
                        />
                        Search
                    </h2>
                    <h3>
                        Enter Recipe Ingredients
                    </h3>


                    <Row className='show-grid'>
                        <FormGroup
                            onKeyPress={this.handleButtonPress}
                        >
                            <Col xs={12} sm={6} smPush={1}>
                                <FormControl type="text"
                                             value={this.state.chosenIngredient}
                                             placeholder="Your ingredient"
                                             onChange={this.changeValue}


                                />
                            </Col>
                            <Col xs={12} sm={4} smPush={1}>
                                <Button onClick={this.addIngredient}
                                        className='feature_search_by_ingredient_addIngredientButton'
                                        bsStyle='success'
                                        >
                                    Add Ingredient
                                </Button>
                            </Col>
                        </FormGroup>
                    </Row>

                    <Row className='show-grid'>
                        <Col xs={12} sm={10} smPush={1}>
                            <div className='feature_search_by_ingredient_chosenIngredients'>
                                <ListOfChosenIgredients arrayOfIngredients={this.state.allIngredients}/>
                            </div>

                        </Col>
                    </Row>

                    <Col xs={12} sm={6} smPush={3} >
                        <Link to={'/Recipes/'+this.state.allIngredients}>
                            <Button bsSize='large'
                                    bsStyle='success'
                                    className='feature_search_by_ingredient_searchButton'

                                    // onClick={this.fetchForIngredients}
                            >
                                    <Image className="search_image"
                                           src={SearchWhite}
                                           alt='Search Icon'/>
                                SEARCH
                            </Button>
                        </Link>
                    </Col>

                </Grid>
            </Fragment>
        );
    }
}

export default SearchByIngredient;