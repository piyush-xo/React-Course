import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Piyush'
      }
      console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
      console.log('LifecycleA shouldComponentUpdate')
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null;  
    }

    componentDidUpdate() {
      console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'Mehta'
      })
    }

  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>ChangeState</button> 
            <LifecycleB></LifecycleB>        
        </div>)
  }
}

export default LifecycleA