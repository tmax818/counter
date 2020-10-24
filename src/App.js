import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'


class Main extends React.Component {
state = {count: 0}


handleInc = () => {
  this.setState({count: this.state.count + 1})
}

handleDec = () => {
  this.setState({count: this.state.count - 1})
}

handleReset = () => {
  this.setState({count: 0})
}


  render(){
    console.log(this.props)
    return (
      <div className="App">
        <Counter count={this.state.count} handleDec={this.handleDec} handleInc={this.handleInc} reset={this.handleReset} name="Tyler" />

     

    </div>
  )
}

}

class App extends React.Component {
  render() {
    return (

      <Main name="Jose" />

    )
  }

}

export default App;
