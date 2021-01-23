import { Component, Fragment } from "react";
import { Book } from "./pages/book";
import { Recipe } from "./pages/recipe";
import { Header } from "./components/shared/header";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      onNewRecipeForm : false,
      recipes : []
    };

    this.onNewRecipeButtonHandler = this.onNewRecipeButtonHandler.bind(this);
    this.newRecipeEventHandler = this.newRecipeEventHandler.bind(this);
  }

  newRecipeEventHandler( recipe ){
    const recipeList = this.state.recipes;
    recipeList.push( recipe );
    this.setState( { recipes : recipeList } );
  }

  onNewRecipeButtonHandler(){
    if ( ! this.state.onNewRecipeForm )
      this.setState( { onNewRecipeForm : true });
  }

  render() {
      const recipeNames = this.state.recipes.map( (value, index) => value.name );
      console.log(recipeNames)
      return (
        <>
          <Header />
          <div className="App m-4 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-1">
            <Book recipes={ recipeNames } onNewRecipeButtonClick={ this.onNewRecipeButtonHandler } />
            <Recipe isCreatingRecipe={ this.state.onNewRecipeForm } newRecipeEvent={ this.newRecipeEventHandler }  />
          </div>
        </>
      );
  }
}

export default App;