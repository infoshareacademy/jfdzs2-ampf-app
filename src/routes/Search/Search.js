import React, {PureComponent, Fragment} from 'react';
import {Grid, Row, Col, Image, Thumbnail} from 'react-bootstrap';
import Header from "../../components/Header/header.component";
import {Link} from 'react-router-dom';

import SearchIcon from '../../utils/images/search.png';
import IngriedientsImage from '../../utils/images/search-ingredients.jpg';
import DishesImage from '../../utils/images/search-dishes.jpg';

import './Search.style.css';

class Search extends PureComponent {

    render() {
        return (
            <Fragment>
                <Header/>
                <Grid className='feature_search'>
                    <h2>
                        <Image className="search_image"
                               src={SearchIcon}
                               alt='Search Icon'
                        />
                        Search
                    </h2>


                    <Row className='show-grid'>
                        <Col xs={12} sm={6}>
                            <Link to='/SearchByIngredient'>
                                <Image src={IngriedientsImage}
                                       alt='Ingredients image'
                                       className = 'ingredientsImage'

                                />
                                <div className='feature_searchTextOverImage'>Find Recipes by Ingredients</div>
                            </Link>

                        </Col>

                        <Col xs={12} sm={6}>
                            <Link to='/SearchByName'>
                                <Image src={DishesImage}
                                       alt='Dishes image'
                                       className='dishesImage'

                                />
                                <div className='feature_searchTextOverImage'>Find Recipes by Dish Name</div>
                            </Link>
                        </Col>


                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Search;