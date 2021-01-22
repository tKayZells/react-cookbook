import { Component } from "react";

export class StepItem extends Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <li>
                <p className="p-2 m-1 flex justify-between text-md font-light text-gray-500">{ this.props.step } </p>
            </li>
        );
    }

}