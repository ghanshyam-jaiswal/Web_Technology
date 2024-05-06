import React, { Component } from 'react'

export default class ClassBaseCompo extends Component {
    constructor(props){
        super();
        console.log(props)
    }
  render() {
    return (
      <div> 
        <button onClick={()=>{this.props+1}}>Click</button>
      </div>
    )
  }
}
