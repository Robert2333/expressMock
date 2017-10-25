import React from 'react'
import "./MenuItem.css"
const PropTypes=require('prop-types');


class MenuItem extends React.Component{
    
    render(){
        const{subId,id,children}=this.props;
        return(
            <ul onClick={()=>this.context.itemClick(subId.toString(),id.toString())} className={(this.context.menuActive===subId.toString()&&this.context.itemActive===id.toString())? "active":""}>{children}</ul>
        );
    }
}
MenuItem.contextTypes={
    itemClick:PropTypes.func,
    menuActive: PropTypes.string,
    itemActive:PropTypes.string,
}

export default MenuItem;