import React from 'react'
import NavItem from './NavItem'
class SubMenu extends React.Component{
    constructor(){
        super();
    }
    state={itemStyle:"",afterMenuClickStyle:"",show:true};

    itemClick(i){
        alert("itemClick事件触发")
        this.props.itemClick();
    }

    getItem(){
        const {children} = this.props
        const item = React.Children.map(children, (child,i) => {
                if (!child) {
                    alert('没有子元素')
                    return;
                }
                else if(true){
                const id=i.toString();
                const props = {
                    itemClick:()=>this.itemClick(id),//只是传属性，所以不能用onClick直接写事件，那样不过是传了一个onClick的props
                    itemStyle:this.props.itemStyle,
                  }
                  console.log(i);
                return React.cloneElement(child,props)
                }
                return "";
            })
        return item;
    }
    render(){
        return (
             <ul>
                <p onClick={this.props.subMenuClick} style={{fontSize:30}}>{this.props.Title}</p>
                {this.getItem()}
            </ul>
        )
    }
}
SubMenu.item=NavItem;
export default  SubMenu;