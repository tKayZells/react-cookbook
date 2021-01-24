import { Component, Fragment } from "react";
import { Book } from "./pages/book";
import { Recipe } from "./pages/recipe";
import { Header } from "./components/shared/header";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      onNewRecipeForm : false,
      recipes : [],
      selectedRecipe: {}
    };

    this.onNewRecipeButtonHandler = this.onNewRecipeButtonHandler.bind(this);
    this.newRecipeEventHandler = this.newRecipeEventHandler.bind(this);
    this.onViewRecipeHandle = this.onViewRecipeHandle.bind(this);
  }

  newRecipeEventHandler( recipe ){
    const recipeList = this.state.recipes;
    recipeList.push( recipe );
    this.setState( { recipes : recipeList, onNewRecipeForm : false } );
  }

  onNewRecipeButtonHandler(){
    if ( ! this.state.onNewRecipeForm )
      this.setState( { onNewRecipeForm : true });
  }

  onViewRecipeHandle( index ){
    this.setState({ selectedRecipe : this.state.recipes[index], onNewRecipeForm : false });
  }

  render() {
      const recipeNames = this.state.recipes.map( (value, index) => value.name );
      return (
        <>
          <Header />
          <div className="App m-2 mt-16 lg:mt-36 p-4 grid gap-4 sm:gap-8 lg:grid-cols-4 md:grid-cols-1 md:w-2/3 md:mx-auto">
            <Book onViewRecipeEvent={ this.onViewRecipeHandle } recipes={ recipeNames } onNewRecipeButtonClick={ this.onNewRecipeButtonHandler } />
            <Recipe isCreatingRecipe={ this.state.onNewRecipeForm } recipe={ this.state.selectedRecipe } newRecipeEvent={ this.newRecipeEventHandler }  />
          </div>
        </>
      );
  }
}

export default App;