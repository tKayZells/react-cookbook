import { Component, createRef } from "react";
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

        this.titleInput = createRef();
        this.descTextarea = createRef();
    }

    onSaveButtonClick(){
        this.props.newRecipeEvent( { name: this.state.name, desc : this.state.desc, ingridients : this.state.ingridients, steps : this.state.steps } );
        this.setState( { name: '', desc : '', ingridients : [], steps : [] } );
        this.titleInput.current.value = '';
        this.descTextarea.current.value = '';
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

        const titleInput =  inViewMode && this.props.recipe.name ? 
                            <h1 className="mb-2 font-bold text-xl">{ this.props.recipe.name }</h1> : 
                            <input ref={ this.titleInput } className="border rounded-sm p-2 m-2 ml-0 w-56 font-thin text-gray-500" type="text" 
                                onChange={ this.onRecipeNameChange }  disabled={ inViewMode } 
                                placeholder={ inViewMode ? "Select or Create a Recipe":"Recipe name" } />;

        const ingridients = inViewMode && this.props.recipe.ingridients ? this.props.recipe.ingridients : this.state.ingridients;
        const steps = inViewMode && this.props.recipe.steps ? this.props.recipe.steps : this.state.steps;
        const description = inViewMode && this.props.recipe.desc ? this.props.recipe.desc : this.state.desc;

        return (
            <div className="p-2 lg:col-span-2 w-3/4 min-w-3/4 md:w-full lg:w-full">
                <div className="flex">
                    { titleInput }
                    <div className="w-1/12"></div>
                    <button onClick={ this.onSaveButtonClick } disabled={ inViewMode } className={`self-center ${ inViewMode ? 'hidden' : '' }`}>
                        <i className="fas fa-save fa-2x"></i>
                    </button>
                </div>
                <div className="border lg:w-1/3 sm:w-1/2 sm:justify-between"></div>
                <div className="py-4 my-2 flex flex-col md:max-w-md">
                    <label className="text-md my-2 text-gray-600 font-semibold">Description</label>
                    <textarea value={description} ref={ this.descTextarea } className={`border p-2 font-thin text-gray-500 max-h-24 text-sm ${ inViewMode && this.props.recipe.desc ? 'bg-white' : '' } `} onChange={ this.onRecipeDescriptionChange } disabled={ inViewMode }>
                    </textarea>
                </div>
                <Ingredientslist ingridients={ ingridients } inViewMode={ inViewMode } newIngridientEvent={ this.newIngridientEventHandler } />
                <StepsList steps={ steps } inViewMode={ inViewMode } newStepEvent={ this.newStepEventHandler } />
            </div>
        );
    }
    
}