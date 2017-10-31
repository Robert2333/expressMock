import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
const Remarkable = require('remarkable');
export default class Markdwon extends React.Component{
    state={
        marktext:""
    }
    toMarkText=(e)=>{
        var md=new Remarkable();
        console.log(md.render(e.target.value));
        
        this.setState({
            marktext: md.render(e.target.value)
        })
    }
    render(){
        const hello=this.state.marktext;
        return(
            <div>
            <TextArea rows={10}  onChange={this.toMarkText}/>
            <div dangerouslySetInnerHTML={{__html: this.state.marktext}} />
            </div>
        )
    }
}