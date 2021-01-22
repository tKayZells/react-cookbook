import { Component, Fragment } from "react";

export class IngredientItem extends Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <>
                <p className="p-2 m-1 flex justify-between text-md font-light text-gray-500">{ this.props.ingridient.name } <span>x{ this.props.ingridient.qty }</span></p>
            </>
        );
    }

}