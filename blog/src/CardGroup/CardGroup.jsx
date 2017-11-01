import React from 'react'
import AriticleCard from './ArticleCard'
import Markdown from '../Markdown/Markdown'
import Mytext from './Mytext'
export default class CardGroup extends React.Component{
    state={article:`{"employees": [{ "firstName":"Bill" , "lastName":"Gates" },{ "firstName":"George" , "lastName":"Bush" },{ "firstName":"George" , "lastName":"Bush" },{ "firstName":"George" , "lastName":"Bush" },{ "firstName":"Thomas" , "lastName":"Carter" }]}`,
            markarticle:""};
    componentDidMount(){
        //fetch请求
    }

    render(){
        var cardGroup= eval('(' +this.state.article + ')').employees;
        var article = cardGroup.map((child,id)=>{
            console.log(id)
            return <AriticleCard {...this.props} title={child.firstName} summary={child.lastName} date="202020" id="1111" key={id}/>
          });
        return( 
            <div>
            {article}
            <Markdown />
            </div>
    )
    }
}