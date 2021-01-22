import { Component } from "react";
import { Ingredientslist } from "../components/ingredient/ingredientlist";
import { StepsList } from "../components/steps/steplist";

export class Recipe extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="lg:col-span-2">
                <div className="flex">
                    <input className="border rounded-sm p-1 m-2 ml-0" type="text" />
                    <div className="w-1/12"></div>
                    <button className="self-center"><i class="fas fa-save fa-2x"></i></button>
                    {/* <a href="#" className="mx-2 mt-2"><i class="fas fa-edit fa-2x"></i></a> */}
                </div>
                <div className="border lg:w-1/3 sm:w-1/2 sm:justify-between"></div>
                <div className="py-4 my-2 flex flex-col md:max-w-md">
                    <label className="text-lg my-2 text-gray-700 font-normal">Description</label>
                    <textarea className="border p-2 font-thin text-gray-500"></textarea>
                </div>
                <div className="lg:flex justify-between md:max-w-lg">
                    <Ingredientslist />
                    <StepsList />
                </div>
            </div>
        );
    }
    
}