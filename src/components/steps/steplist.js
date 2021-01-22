import { Component, Fragment } from "react";
import { StepItem } from "./stepitem";

export class StepsList extends Component {

    constructor(props) {
        super(props);
        this.state = { steps: [ "Step 1", "Step 2", "Step3" ] }
    }

    render() {

        const stepList = this.state.steps.map ( (value, index) => <StepItem key={index} step={value} /> );

        return (
            <div> 
                <h2 className="mb-2 font-normal text-gray-700 text-lg">Steps</h2>
                <ul className="list-decimal">
                    { stepList }
                </ul>
                <div className="flex relative">
                    <input type="text" className="border rounded-sm p-2 my-2 font-thin text-sm" />
                    <button className="self-center absolute -right-9"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
            </div>
        );
    }

}