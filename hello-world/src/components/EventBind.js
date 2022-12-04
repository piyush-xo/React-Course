import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
      }

      this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState({
            message: 'goodbye'
        })
    }

    render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>

      </div>
    )
  }
}

export default EventBind