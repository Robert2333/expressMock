import React from 'react'
import AriticleCard from './ArticleCard'
import Markdown from '../Markdown/Markdown'
import Url from '../URL/Url.js'
export default class CardGroup extends React.Component {
    state = {
        article: ``,
        markarticle: ""
    };
    componentDidMount = () => {
        //fetch请求
        var state = this;
        var type=this.props.match.path;
        type=type.split("/")[1]
        console.log(type)
        fetch(`${Url.getCard}${type}`, {
                method: 'GET',
                cache: 'default'
            }).then(function (response) {
            if (response.status !== 200) {
                console.log("存在一个问题，状态码为：" + response.status);
                return;
            }
            //检查响应文本
            response
                .json()
                .then((data) => {
                    state.setState({article: data});
                });
        })
            .catch(function (err) {
                console.log("Fetch错误:" + err);
            });
    }

    render() {
        if (this.state.article !== ``) {
            console.log(this.state.article)
            console.log(this.props.match.path)
            // var cardGroup = JSON.parse(this.state.article) //eval('(' +this.state.article
            // + ')');
            var cardGroup = this.state.article;
            var article = cardGroup.map((child, id) => {
                return <AriticleCard
                    {...this.props}
                    title={child.title}
                    summary={child.abscontent}
                    date={child.time}
                    id={child.id}
                    key={child.id}/>
            });
        }

        return (
            <div>
                {article}
                <Markdown/>
            </div>
        )
    }
}