import React, {Component} from 'react';
import './App.css';
import Li from './Li/Li.js'
import Suptest from './Test/SuperTest.js'
import AAA from './AAA.js'
//import Test from './Test/Test.js'
class App extends Component {
  constructor() {
    super();
  }

  test = (i) => {
    alert(i)
    let x = this.state.style;
    x[i] = 'aaa';
    this.setState({
      style: ['aaa', 'li', 'li']
    });
  }

  state = {
    style: ['li', 'li', 'li']
  };
  render() {
    return (
      <div className="App">
        <Li
          type='login'
          value='hello'
          style={this.state.style[0]}
          onClick={() => this.test(1)}></Li>
        <Li type='login' value='xu' style={this.state.style[1]}/>
        <Li type='login' value='aaaaa'/>
        <p onClick={this.test}>ceshishidhjishifasd</p>
        <Suptest fatherText='一级菜单'>
          <Suptest.Item>测试1</Suptest.Item>
          <Suptest.Item >测试23</Suptest.Item>
          <Suptest.Item >测试11123</Suptest.Item>
          <AAA/>
          <AAA/>
        </Suptest>
      </div>
    );
  }
}

export default App;