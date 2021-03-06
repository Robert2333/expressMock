import React from 'react'
const PropTypes=require('prop-types');
class SubMenu extends React.Component{
    getItem(){
        const {children} = this.props;
        const item = React.Children.map(children, (child,id) => {
                if (!child) {
                    alert('没有子元素')
                    return;
                }
                else {
                const props = {
                    subId:this.props.subId,
                    id:this.props.subId.toString()+id.toString(),
                  }
                return React.cloneElement(child,props)
                }
            })
        return item;
    }    

    render(){
        const {subId,title} = this.props;
        return(
            <div>
            <h4 onClick={()=>this.context.onSelect(subId.toString())}>{title}</h4>
            <ul>{this.getItem()}</ul>
            </div>
        )
    }
}

SubMenu.contextTypes={
    onSelect:PropTypes.func,
}
export default SubMenu;
