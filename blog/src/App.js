import React, {Component} from 'react';
//import './App.css';
import Li from './Li/Li.js'
import Suptest from './Test/SuperTest.js'
// import Menu from './Nav/Menu'
// import SubMenu from './Nav/SubMenu'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'
import SubMenu from'./Menu/SubMenu'
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
        {/* <Li
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
        </Suptest>
      <Menu>
      <SubMenu Title="高级导航栏">
        <SubMenu.item>正式导航栏1</SubMenu.item>
        <SubMenu.item>正式导航栏2</SubMenu.item>
        <SubMenu.item>正式导航栏3</SubMenu.item>
      </SubMenu>
      <SubMenu Title="高级导航栏2">
        <SubMenu.item>正式导航栏1</SubMenu.item>
        <SubMenu.item>正式导航栏2</SubMenu.item>
        <SubMenu.item>正式导航栏3</SubMenu.item>
      </SubMenu>
      </Menu>  */}
      <Menu>
        <SubMenu title="Title1">
          <Menu.item>1</Menu.item>
          <Menu.item>2</Menu.item>
          <Menu.item>3</Menu.item>
          <Menu.item>4</Menu.item>
        </SubMenu>
        <SubMenu title="Title2">
          <Menu.item>1</Menu.item>
          <Menu.item>2</Menu.item>
          <Menu.item>3</Menu.item>
          <Menu.item>4</Menu.item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}

export default App;