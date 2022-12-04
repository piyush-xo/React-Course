import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  
    render() {
    //     if(this.state.isLoggedIn){
    //         return <div>Welcome Piyush</div>
    //     }
    // return <div>Welcome Guest</div>

    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Piyush</div> :
    //     <div>Welcome Guest</div>
    // )

    return this.state.isLoggedIn && <div>Welcome Piyush</div>
  }
}

export default UserGreeting