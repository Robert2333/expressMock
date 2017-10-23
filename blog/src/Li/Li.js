import React from 'react'
import {Icon} from 'antd'
import './Li.css'
class Li extends React.Component{
    //@type:决定icon标签
    //@value:决定值
    state={li_style:"Li"}
    click=(event)=>
    {
       // this.setState({li_style:"aaa"})
       this.props.test(event.target);
    }
    render()
    {
        return(
            <li className={this.props.style}  onClick={this.props.onClick}>
                <Icon type={this.props.type}/>
                <span>{this.props.value}</span>
            </li>
        )
    }
}
export default  Li;