import { Component, createRef } from "react";

export class StepForm extends Component {

    constructor(props){
        super(props);
        this.state = { step : '' }

        this.stepInput = createRef();

        this.onStepChangeHandler = this.onStepChangeHandler.bind(this);
        this.newStepButtonHandler = this.newStepButtonHandler.bind(this);
    }

    onStepChangeHandler( e ){
        this.setState( { step : e.target.value } );
    }

    newStepButtonHandler(){
        this.props.newStepEvent( this.state.step );
        this.setState( { step : '' } );
        this.stepInput.current.value = '';
    }

    render(){
        return(
            <div className="flex relative">
                <input ref={this.stepInput} type="text" onChange={this.onStepChangeHandler} className="border rounded-sm p-2 my-2 mr-2 font-thin text-sm w-96" />
                <button className="self-center" onClick={this.newStepButtonHandler} ><i className="fas fa-plus-circle fa-2x"></i></button>
            </div>
        );
    }
}