import { Component, Fragment } from "react";
import { IngredientForm } from "./ingredientform";
import { IngredientItem } from "./ingredientitem";

export class Ingredientslist extends Component {

    constructor(props) {
        super(props);
        this.OnNewIngridienEvent = this.OnNewIngridienEvent.bind(this);
    }

    OnNewIngridienEvent( ingridient ){
        this.props.newIngridientEvent( ingridient );
    }

    render() {

        const ingredientlist = Array.isArray( this.props.ingridients ) && this.props.ingridients.length > 0 ? 
                    this.props.ingridients?.map ( (value, index) => <IngredientItem key={index} ingridient={value} /> ) :
                    <p className="text-gray-500 text-sm">Add some ingridients first.</p>

        const newIngridientForm = this.props.inViewMode ? '' : <IngredientForm newIngridientEvent={this.OnNewIngridienEvent} />
                    
        return (
            <div className="mb-10"> 
                <h2 className="mb-2 font-semibold text-gray-600 text-md">Ingredient List</h2>
                { newIngridientForm }
                <>
                    { ingredientlist }
                </>
            </div>
        );
    }

}