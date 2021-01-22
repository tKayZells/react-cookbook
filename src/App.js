import { Component, Fragment } from "react";
import { Book } from "./pages/book";
import { Recipe } from "./pages/recipe";
import { Header } from "./components/shared/header";

class App extends Component {
  render() {
      return (
        <>
          <Header />
          <div className="App m-4 p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-1">
            <Book />
            <Recipe />
          </div>
        </>
      );
  }
}

export default App;