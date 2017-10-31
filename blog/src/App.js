import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CardGroup from './CardGroup/CardGroup'
import './App.css'
const { Header, Content, Footer, Sider } = Layout;
const {Item}=Menu;

class App extends React.Component{
  
  render(){
    return(
  <Router>
    <div>
    <Layout>
    <Header className="header">
     This is header;
    </Header>
    <Content style={{ padding: '30px 90px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={320} style={{ background: '#fff' }} >
          <Menu
            mode="inline"
            //defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.SubMenu key="sub1" title={<span><Icon type="user" />前端知识笔记</span>}>
              <Item key="1" >React知识<Link to="/react"  /></Item>
              <Item key="2">前段工程化<Link to="/webpack" /></Item>
              <Item key="3">CSS笔记<Link to="/css" /></Item>
              <Item key="4">杂项笔记<Link to="/other" /></Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" title={<span><Icon type="laptop" />后端知识笔记</span>}>
              <Item key="5">Java基础知识<Link to="/java" /></Item>
              <Item key="6">Spring学习<Link to="/spring" /></Item>
              <Item key="7">Mybaits学习<Link to="/mybatis" /></Item>
              <Item key="8">杂项笔记<Link to="/other2" /></Item>
            </Menu.SubMenu>
            <Menu.Item key="sub3">
              <Icon type="user" />
              <span>自动化测试</span>
              <Link to="/autotest" />
            </Menu.Item>
            <Menu.Item key="sub4">
              <Icon type="user" />
              <span>关于作者</span>
              <Link to="/aboutMe" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 960 }}>
          <Route  path="/react" component={CardGroup}/>
          <Route path="/webpack" component={CardGroup}/>
          <Route path="/css" component={CardGroup}/>
          <Route path="/other" component={CardGroup}/>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
      <hr/>

    </div>
  </Router>
    )
  }
}
export default App
