import { Component } from "react";

export class Header extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="h-14 p-2 text-center uppercase font-semibold text-2xl bg-gray-700 text-white tracking-widest fixed top-0 w-full">
                Cookbook
                <i className="fas fa-book ml-4"></i>
            </div>
        );
    }
}