import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Piyush'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Piyush'
            })
        }, 2000)
    }

  render() {
    console.log('Parent Render')
    return (
        <div>
            ParentComp
            <RegularComp name={this.state.name}></RegularComp>
            <PureComp name={this.state.name}></PureComp>
        </div>
    )
  }
}

export default ParentComp