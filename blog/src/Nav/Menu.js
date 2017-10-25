import React from 'react'
class Menu extends React.Component{
    constructor(){
        super();
    }
    state={itemStyle:"",afterMenuClickStyle:"",show:true};
    subMenuClick(i){
        alert("subMenuClick事件触发11")
        if(!this.state.show){
        this.setState({afterMenuClickStyle:"",show:!this.state.show})
        }
        else {
            this.setState({afterMenuClickStyle:"test",show:!this.state.show}) 
        }

    }
    itemClick(i){
        alert("itemClick事件触发负组件")
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
                    subMenuClick:()=>this.subMenuClick(i),
                    itemClick:()=>this.itemClick(),//只是传属性，所以不能用onClick直接写事件，那样不过是传了一个onClick的props
                    itemStyle:(id===this.state.itemStyle?"hello":"")+' '+this.state.afterMenuClickStyle,//传css的calssName
                    id:id,
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
            <div>
            {this.getItem()}
            </div>
        )
    }
}
export default  Menu;