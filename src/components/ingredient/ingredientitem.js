import { Component, Fragment } from "react";

export class IngredientItem extends Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <>
                <p className="p-2 my-1 pl-0 flex justify-between text-md font-light text-gray-500 md:w-3/5 xl:w-2/5">{ this.props.ingridient.name } <span>x{ this.props.ingridient.qty }</span></p>
            </>
        );
    }

}