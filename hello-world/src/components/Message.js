import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    subscribeMessage() {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    unsubscribeMessage() {
        this.setState({
            message: 'Unsubscribed :('
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subscribeMessage()}>Subscribe</button> <button onClick={() => this.unsubscribeMessage()}>Unsubscribe</button>
            </div>
        )
    }
}

export default Message