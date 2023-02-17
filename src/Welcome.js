import React from "react";
import { App } from "./App";
export class Welcome extends React.Component{
    render(){
        return (
        <div>
            <p>Welcome, {this.props.name}</p>

            {this.props.renderAge && <p>Your age is {this.props.age}</p>}
            
        </div>
        )
    }
}
Welcome.defaultProps={
    name: "Mihai"
}