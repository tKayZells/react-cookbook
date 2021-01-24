import { Component, Fragment } from "react";
import { StepForm } from "./stepform";
import { StepItem } from "./stepitem";

export class StepsList extends Component {

    constructor(props) {
        super(props);
        this.state = { steps: [ "Step 1", "Step 2", "Step3" ] }
        this.onNewStepEvent = this.onNewStepEvent.bind(this);
    }

    onNewStepEvent( step ){
        this.props.newStepEvent( step );
    }

    render() {

        const stepList = Array.isArray( this.props.steps ) && this.props.steps.length > 0 ? 
                    this.props.steps.map ( (value, index) => <StepItem key={index} step={value} /> ) :
                    <p className="text-gray-500 text-sm">Add some preparation steps first.</p>

        const newStepForm = this.props.inViewMode ? '' : <StepForm newStepEvent={this.onNewStepEvent} />

        return (
            <div> 
                <h2 className="mb-2 font-semibold text-gray-600 text-md">Steps</h2>
                { newStepForm }
                <ul className={`list-decimal ${ this.props.steps.length > 0 ? 'pl-4' : '' } `}  >
                    { stepList }
                </ul>
            </div>
        );
    }

}