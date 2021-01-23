import { Component } from "react";

export class Button extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button className="py-2 px-4 rounded-sm bg-gray-700 text-white text-sm cursor-pointer font-semibold tracking-wider hover:bg-gray-500" onClick={this.props.handleClick} >
                { this.props.text }
            </button>
        );
    }
}