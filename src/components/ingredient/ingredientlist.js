import { Component, Fragment } from "react";
import { IngredientItem } from "./ingredientitem";

export class Ingredientslist extends Component {

    constructor(props) {
        super(props);
        this.state = { ingridients: [ { name: "ingridient 1", qty: 1 } , { name: "ingridient 2", qty: 3 }, { name: "ingridient 3", qty: 4 } ] }
    }

    render() {

        const ingredientlist = this.state.ingridients.map ( (value, index) => <IngredientItem key={index} ingridient={value} /> );

        return (
            <div> 
                <h2 className="mb-2 font-normal text-gray-700 text-lg">Ingredient List</h2>
                <>
                    { ingredientlist }
                </>
                <div className="flex relative">
                    <input type="text" className="border rounded-sm p-2 my-2 font-thin text-sm" />
                    <input type="number" className="border rounded-sm p-2 m-2 w-14 font-thin text-sm" />
                    <button className="self-center absolute -right-8"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
            </div>
        );
    }

}