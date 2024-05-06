import React, { createRef } from 'react'
import { Component } from 'react';

export default class ClassBasedCompo extends Component {
    constructor(){
        super();
        this.state={
            count:0,
            login:""
        }
    }
   btn=createRef();
//    In class based component we can't declare anything using let,var,const
  render() {
    return (
      <section>
        <button ref={this.btn}>Click Me</button>
        <button ref={this.btn}>Click Me</button>
        <button onClick={()=>{this.btn.current.style.backgroundColor="red"}}>Click Me2</button>
      </section>
    )
  }
}
