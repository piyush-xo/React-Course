import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log('Pure Render')
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp