import React from 'react'
import "./MenuItem.css"
const PropTypes=require('prop-types');


class MenuItem extends React.Component{
    
    render(){
        const{subId,id,children}=this.props;
        const isClick=(this.context.menuActive[subId]===1&&this.context.itemActive===id.toString())? "active":"";
        const isShow=(this.context.menuActive[subId]===1)?"":"block";
        return(
            <ul onClick={()=>this.context.itemClick(subId.toString(),id.toString())} className={"default-item "+isClick+" "+isShow}>{children}</ul>
        );
    }
}
MenuItem.contextTypes={
    itemClick:PropTypes.func,
    menuActive: PropTypes.array,
    itemActive:PropTypes.string,
}

export default MenuItem;