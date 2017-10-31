import React from 'react'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
const PropTypes = require('prop-types');
class Menu extends React.Component {
    state={
        menuActive:[],//标题哪个被点击
        itemActive:"",//子标题哪个被点击
    }
    getChildContext() {
        return {
            onSelect: this.onSelect,
            itemClick:this.itemClick,
            menuActive:this.state.menuActive,
            itemActive:this.state.itemActive,
        };
    }
    itemClick=(subId,id)=>{
        console.log(`subId:${subId}&id:${id}`)
        this.setState({itemActive:id})
    }
    onSelect=(subId)=>{
        let menuActiveArray=this.state.menuActive;
        if(menuActiveArray[subId]===1)
        menuActiveArray[subId]="";
        else
        menuActiveArray[subId]=1;
        console.log(menuActiveArray);
        this.setState({menuActive:menuActiveArray})
    }
    getItem() {
        const {children} = this.props
        const item = React
            .Children
            .map(children, (child, id) => {
                if (!child) {
                    alert('没有子元素')
                    return;
                } else {
                    const props = {
                        subId:id,
                    }
                    return React.cloneElement(child, props)
                }
            })
        return item;
    }
    render(){
        return(
            <div style={{borderRight:2,borderColor:"black"}}>
            {this.getItem()}
            </div>
        )
    }
}
Menu.childContextTypes = {
    onSelect: PropTypes.func,
    itemClick: PropTypes.func,
    menuActive: PropTypes.array,
    itemActive:PropTypes.string,
}
Menu.subTitle=SubMenu;
Menu.item=MenuItem;
export default Menu;