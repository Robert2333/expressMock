import React,{Children} from 'react';
import Test from './Test.js';
class Suptest extends React.Component {
    state={
    la:"",
    show:true,
    x:""
    }
    hello=(id)=>
    {
        this.setState({la:id});
    }
    getItem() {
        const {active, stateLess, children} = this.props
        const item = React.Children.map(children, (child,i) => {
                if (!child) {
                    alert('没有子元素')
                    return;
                }
                else if(true){
                const id=i.toString();
                const props = {
                    clickTest:()=>this.hello(id),//只是传属性，所以不能用onClick直接写事件，那样不过是传了一个onClick的props
                    sss:(id===this.state.la?"hello":"")+' '+this.state.x,
                  }
                console.log(child)
                console.log(i)
                return React.cloneElement(child,props)
                }
                return "";
            })
        return item;
    }
    hide=()=>
    {
        this.setState({show:!this.state.show});//没执行一次，切换一次是否显示
        if(this.state.show)
        {
            this.state.x='test'
            return;
        }
        this.state.x="";
        
    }
    render() {
        return (
            <div>
                <ul>
                <p onClick={this.hide}>{this.props.fatherText}</p>
                {this.getItem()}
                </ul>
            </div>
        )
    }
}
Suptest.Item = Test;
export default Suptest;

