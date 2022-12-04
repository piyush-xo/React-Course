import React, {Component} from "react";

class GreetClass extends Component {
    render() {
        return <div><h1>Welcome {this.props.name} {this.props.surname} from Class Component</h1></div>
    }
}

export default GreetClass