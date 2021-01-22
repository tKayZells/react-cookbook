import { Component, Fragment } from "react";
import { RecipeItem } from "../components/recipe/recipeitem";
import { Button } from "../components/shared/Button";

export class Book extends Component {

    constructor(props){
        super(props);
        this.state = { 
            recipeList : ["recipe name 1", "recipe name 2", "recipe name 3", "recipe name 4"]
        };
    }

    render(){
        const listItem  = this.state.recipeList.map( (val, index) => <RecipeItem  key={index} name={ val } /> )

        return (
            <div className="p-2 lg:col-start-2">
                <h2 className="mb-2 font-bold text-lg">Recipe List</h2>
                <div className="border sm:w-1/4 md:w-1/3"></div>
                <div className="m-2 p-4">
                    { listItem }
                </div>
                <Button text="new recipe" />
            </div>
        );
    }

}