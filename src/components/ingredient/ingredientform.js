import { Component, createRef } from "react";

export class IngredientForm extends Component {
    constructor(props){
        super(props);
        this.state = { name: '', qty : 0 };
        
        this.newIngridientButtonHandle = this.newIngridientButtonHandle.bind(this);
        this.onNewIngridientNameChange = this.onNewIngridientNameChange.bind(this);
        this.onNewIngridientQuantityChange = this.onNewIngridientQuantityChange.bind(this);
        this.nameInput = createRef();
        this.quantityInput = createRef();
    }

    newIngridientButtonHandle(){
        this.props.newIngridientEvent( { name : this.state.name, qty : this.state.qty } );
        this.setState({ qty : '', name : '' });
        this.nameInput.current.value = '';
        this.quantityInput.current.value = '';
    }

    onNewIngridientNameChange(e){
        this.setState({ name : e.target.value })
    }

    onNewIngridientQuantityChange(e){
        this.setState({ qty : e.target.value });
    }

    render(){
        return (
            <div className="flex relative">
                <input type="text" ref={this.nameInput} onChange={this.onNewIngridientNameChange} className="border rounded-sm p-2 my-2 font-thin text-sm w-80" />
                <input type="number" ref={this.quantityInput} onChange={this.onNewIngridientQuantityChange} className="border rounded-sm p-2 m-2 w-16 font-thin text-sm" />
                <button className="self-center " onClick={this.newIngridientButtonHandle}><i className="fas fa-plus-circle fa-2x" ></i></button>
            </div>
        );
    }

}