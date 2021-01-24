import { Component } from "react";

export class RecipeItem extends Component {

    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.props.handleButtonClick(this.props.index);
    }

    render(){
        return (
            <div className="p-2 flex justify-start"> 
                <p className="mr-14 font-light text-gray-500">
                { this.props.recipe } 
                </p>
                <button onClick={ this.handleButtonClick } ><i className="fas fa-chevron-right mt-1"></i></button>
            </div>
        );
    }

}