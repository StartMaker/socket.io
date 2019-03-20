import React from 'react';
import {Layout, List} from "antd";

const {Header, Content, Sider} = Layout;
import './styles.less';
import {Switch, Route} from "react-router-dom";

class Room extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    title: '房间列表',
                    url: '/room/all'
                },
                {
                    title: '我的房间',
                    url: '/room/mine'
                }
            ]
        }
    }
    render() {
        const {list} = this.state;
        console.log(list);
        return (
            <Layout>
                <Header tagName='header'>我的世界</Header>
                <Layout>
                    <Sider>
                        <List
                            size="large"
                            column={1}
                            dataSource={list}
                            renderItem={item =>
                                (
                                    <List.Item key={item.title}>
                                        {item.title}
                                    </List.Item>
                                )
                            }
                            footer={<div><b>ant design</b> footer part</div>}
                        />
                    </Sider>
                    <Content>
                        <Switch>
                            <Route path='/room/all'></Route>
                            <Route path='/room/mine'></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Room;