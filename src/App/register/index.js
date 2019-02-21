import React from 'react';
import {withRouter} from "react-router";
import {Form,Layout,Button} from 'antd';
import {connect} from "react-redux";

const {Content} = Layout;

import MyInput from './input';
import './styles.less';
import {Register} from "../../action/ajax";

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
    }
    formSubmit = (ev) =>{
        const {dispatch} = this.props;
        ev.preventDefault();
        if(this.password.state.value !== this.checkpassword.state.value){
            this.checkpassword.setState({
                inputState: 'error'
            });
            return ;
        }
        Register({
            userName: this.username.state.value,
            userPassword: this.password.state.value
        },dispatch);
    };
    render() {
        // const {password, checkpassword} = this.state;
        return(
            <Layout page='register'>
                <Content>
                    <Form onSubmit={this.formSubmit}>
                        <Form.Item>
                            <h2>欢迎注册</h2>
                        </Form.Item>
                        <Form.Item>
                            <MyInput
                                placeholder='Enter your username'
                                name='username'
                                type='text'
                                ref={node => this.username = node}
                                iconType='user'
                            />
                        </Form.Item>
                        <Form.Item>
                            <MyInput
                                placeholder='Enter your password'
                                name='password'
                                type='password'
                                ref={node => this.password = node}
                                iconType='lock'
                                inputState=''
                            />
                        </Form.Item>
                        <Form.Item>
                            <MyInput
                                placeholder='Check your password'
                                name='checkpassword'
                                type='password'
                                ref={node => this.checkpassword = node}
                                iconType='lock'
                                inputState=''
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary' block={true}>注册</Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        );
    }
}

export default withRouter(connect()(RegisterForm));