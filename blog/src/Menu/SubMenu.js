import React from 'react'
const PropTypes=require('prop-types');
class SubMenu extends React.Component{
    getItem(){
        const {children,subId} = this.props;
        const item = React.Children.map(children, (child,id) => {
                if (!child) {
                    alert('没有子元素')
                    return;
                }
                else {
                const props = {
                    subId:this.props.subId,
                    id:id,
                  }
                return React.cloneElement(child,props)
                }
                return "";
            })
        return item;
    }    

    render(){
        const {subId,title} = this.props;
        return(
            <div>
            <h4 onClick={()=>this.context.onSelect(subId)}>{title}</h4>
            <ul>{this.getItem()}</ul>
            </div>
        )
    }
}

SubMenu.contextTypes={
    onSelect:PropTypes.func,
}
export default SubMenu;
