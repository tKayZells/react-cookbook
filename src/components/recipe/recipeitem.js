import { Component } from "react";

export class RecipeItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="p-2 flex justify-start"> 
                <p className="mr-14 font-light text-gray-500">
                { this.props.name } 
                </p>
                <i class="fas fa-chevron-right mt-1"></i>
            </div>
        );
    }

}