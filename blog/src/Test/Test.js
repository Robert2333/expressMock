import React from 'react'
import './Test.css'
class Test extends React.Component{
    //<li onClick={this.props.clickTest} className={this.props.sss}>{this.props.children}</li>
    render(){
        return(
            <li onClick={this.props.clickTest} className={this.props.sss}>{this.props.children}</li>
        )
    }
}
export default Test;