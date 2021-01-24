import { Component, Fragment } from "react";
import { RecipeItem } from "../components/recipe/recipeitem";
import { Button } from "../components/shared/Button";

export class Book extends Component {

    constructor(props){
        super(props);
        
        this.onButtonClickHandle = this.onButtonClickHandle.bind(this);
        this.onViewRecipeButtonClickHandle = this.onViewRecipeButtonClickHandle.bind(this);
    }

    onButtonClickHandle(){
        this.props.onNewRecipeButtonClick();
    }

    onViewRecipeButtonClickHandle( index ){
        this.props.onViewRecipeEvent(index);
    }

    render(){
        const listItem  =  Array.isArray( this.props.recipes ) && this.props.recipes.length > 0 ? 
            this.props.recipes.map( (val, index) => <RecipeItem handleButtonClick={ this.onViewRecipeButtonClickHandle } index={ index } key={index} recipe={ val } /> ) :
            <p className="text-gray-500 ">Cookbook empty, Create some recipes!</p>;

        return (
            <div className="p-2 lg:col-start-2">
                <h2 className="mb-2 font-bold text-xl">Recipe List</h2>
                <div className="border sm:w-1/4 md:w-1/3"></div>
                <div className="my-2 py-4">
                    { listItem }
                </div>
                <Button text="new recipe" handleClick={this.onButtonClickHandle} />
            </div>
        );
    }

}