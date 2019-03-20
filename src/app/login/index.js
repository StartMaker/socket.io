import React from 'react';
import {Layout, Form, Input, Button} from "antd";
const {Header,Content, Footer} = Layout;
import {withRouter} from 'react-router-dom';
import io from 'socket.io-client';
import './styles.less';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            username: ''
        };
    }
    formSubmit = (event) => {
        event.preventDefault();
        // const socket = io();
        // const {username, password} = this.state;
        const {history} = this.props;
        // socket.emit('login',{username: username,password: password});
        // socket.on('login',(data)=>{
        //     console.log(data);
        // });
        // socket.on('login success',(msg) => {
        //     if(msg.login === true){
        //         location.href = '/room';
        //     }
        // });
        history.push('/room');
    };
    userChange = (event) => {
        this.setState({
            username: event.target.value
        });
    };
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };
    render() {
        const {formSubmit, userChange, passwordChange} = this;
        const {password, username} = this.state;
        return (
            <Layout page='login'>
                <Header>欢迎来到聊天室</Header>
                <Content>
                    <Form onSubmit={formSubmit}>
                        <Form.Item>
                            <p>登陆到我的世界</p>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                name='user'
                                value={username}
                                onChange={userChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type='password'
                                name='password'
                                value={password}
                                onChange={passwordChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Button block={true} type='primary' htmlType='submit'>登陆</Button>
                        </Form.Item>
                    </Form>
                </Content>
                <Footer/>
            </Layout>
        );
    }
}

export default withRouter(Login);