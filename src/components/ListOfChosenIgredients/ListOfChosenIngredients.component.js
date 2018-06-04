import React, { PureComponent, Fragment } from 'react';
import "./ListOfChosenIngredients.style.css";


class ListOfChosenIngredients extends PureComponent {

    removeIngredient = (index,event) => {
        event.preventDefault();
        this.setState(this.props.arrayOfIngredients.splice(index, 1))
    };

    renderIngredientsList = () =>
    this.props.arrayOfIngredients.map((item,index) =>
        <div className="singleIngredient"
              key={index}>
                    {item}&nbsp;&nbsp;&nbsp;
                    <a href='#'
                       value={index}
                       onClick={this.removeIngredient.bind(this,index)}>X
                    </a>
        </div>
    );

    render() {
        return (
            <Fragment>
                {this.renderIngredientsList()}
            </Fragment>
        )
    }
}

export default ListOfChosenIngredients;
