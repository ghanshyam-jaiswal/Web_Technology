import React, { Component } from 'react'
import ClassBaseCompo from './ClassBaseCompo';

export default class LifeCycleMethod extends Component {
  constructor(){
    super();
    this.state={
      count:0
    };
  }
  render() {
    return (
      <div><ClassBaseCompo count={this.state.count}/></div>
    )
  }
}
