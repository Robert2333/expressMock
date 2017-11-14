import React from 'react'
import {Card} from 'antd'
import { Link} from 'react-router-dom'
import './CardClass/Card.css'

export default class ArticleCard extends React.Component {
    // 属性：
    // id:文章号
    // title:文章题目
    // summary:文章总结
    // date:上传时间
    render() {
        console.log(this.props.match)
        return (

            <div style={{marginTop:40}}>
            <Link to={`${this.props.match.path}/${this.props.id}`}>
                <Card 
                    title={this.props.title}
                    style={{
                    width: '80%',margin:"auto"
                }}>
                    <p className="summary">{this.props.summary}</p>
                    <hr/>
                    <p className="p-data">{this.props.date}</p>
                </Card>
            </Link>
            </div>
        )
    }
}