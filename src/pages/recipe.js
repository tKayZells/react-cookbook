import { Component } from "react";
import { Ingredientslist } from "../components/ingredient/ingredientlist";
import { StepsList } from "../components/steps/steplist";

export class Recipe extends Component {

    constructor(props){
        super(props);
        this.state = { name: '', desc : '', ingridients : [], steps : [] }

        this.newIngridientEventHandler = this.newIngridientEventHandler.bind(this);
        this.newStepEventHandler = this.newStepEventHandler.bind(this);
        this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
        this.onRecipeDescriptionChange = this.onRecipeDescriptionChange.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    }

    onSaveButtonClick(){
        this.props.newRecipeEvent( { name: this.state.name, desc : this.state.desc, ingridients : this.state.ingridients, steps : this.state.steps } );
        this.setState( { name: '', desc : '', ingridients : [], steps : [] } );
    }

    onRecipeNameChange( e ){
        this.setState( { name: e.target.value } );
    }

    onRecipeDescriptionChange( e ) {
        this.setState( { desc: e.target.value } );
    }

    newIngridientEventHandler(ingridient){
        const newIngridientList = this.state.ingridients;
        newIngridientList.push( ingridient );
        this.setState( { ingridients : newIngridientList } );
    }

    newStepEventHandler( step ){
        const newStepList = this.state.steps;
        newStepList.push( step );
        this.setState( { steps : newStepList } );
    }

    render(){
        const inViewMode = !this.props.isCreatingRecipe;

        return (
            <div className="lg:col-span-2">
                <div className="flex">
                    <input className="border rounded-sm p-2 m-2 ml-0 w-56 font-thin text-gray-500" type="text" 
                        onChange={ this.onRecipeNameChange } 
                        disabled={ inViewMode } 
                        placeholder={ inViewMode ? "Select or Create a Recipe":"Recipe name" } />
                    <div className="w-1/12"></div>
                    <button onClick={ this.onSaveButtonClick } disabled={ inViewMode } className="self-center">
                        <i className="fas fa-save fa-2x"></i>
                    </button>
                </div>
                <div className="border lg:w-1/3 sm:w-1/2 sm:justify-between"></div>
                <div className="py-4 my-2 flex flex-col md:max-w-md">
                    <label className="text-lg my-2 text-gray-700 font-normal">Description</label>
                    <textarea className="border p-2 font-thin text-gray-500 max-h-24 text-sm" onChange={ this.onRecipeDescriptionChange } disabled={ inViewMode }>
                    </textarea>
                </div>
                <Ingredientslist ingridients={ this.state.ingridients } inViewMode={ inViewMode } newIngridientEvent={ this.newIngridientEventHandler } />
                <StepsList steps={ this.state.steps } inViewMode={ inViewMode } newStepEvent={ this.newStepEventHandler } />
            </div>
        );
    }
    
}