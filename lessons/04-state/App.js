// https://jsbin.com/zijoxu/edit?js,output

import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
      <input type="text"
        onChange={this.update.bind(this)} />
      <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App
