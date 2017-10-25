import React from 'react'
import './NavItem.css'
class NavItem extends React.Component{
    render(){
        return(
            <li onClick={this.props.itemClick} className={this.props.itemStyle}>{this.props.children}</li>
        )
    }
}

export default  NavItem;