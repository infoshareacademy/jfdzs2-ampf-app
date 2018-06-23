import ListOfChosenIgredients from '../../components/ListOfChosenIgredients/ListOfChosenIngredients.component';
import {Button, FormControl, Grid, Row, Col, Image, FormGroup} from 'react-bootstrap';
import React, {PureComponent, Fragment} from 'react';
import Menu from "../../components/menu/menu.component";

import Search from "../../utils/images/search.png";
import SearchWhite from "../../utils/images/search-white.png";

import "./SearchByIngredient.style.css";




class SearchByIngredient extends PureComponent {
    state = {
        chosenIngredient: '',
        allIngredients: [],
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



    render() {
        return (
            <Fragment>
                <Menu/>
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
                        <FormGroup>
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
                                        bsStyle='success'>
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
                        <Button bsSize='large'
                                bsStyle='success'
                                className='feature_search_by_ingredient_searchButton'>
                                <Image className="search_image"
                                       src={SearchWhite}
                                       alt='Search Icon'/>
                            SEARCH
                        </Button>
                    </Col>

                </Grid>
            </Fragment>
        );
    }
}

export default SearchByIngredient;