import React from 'react'
import Url from '../URL/Url.js'
export default class Article extends React.Component{
    state={article:""}
    //http://localhost:8080/myBlog/GetConcrete?id=${this.props.match.params.id
    componentDidMount = () => {
        //fetch请求
        var state = this;
        fetch(`${Url.getArticle}${this.props.match.params.id}`, {
                method: 'GET',
                mode: 'cors',
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
            // var cardGroup = JSON.parse(this.state.article) //eval('(' +this.state.article
            // + ')');
            var cardGroup = this.state.article;
            var article = cardGroup.map((child, id) => {
                return (
                    <div>
                    <h1>{child.title}</h1>
                    <p>{child.content}</p>
                    </div>
                )
            });
        }

        return (
            <div>
                {article}
            </div>
        )
    }
}