import React from 'react';
import {Icon, Input} from 'antd';

class MyInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            placeholder: this.props.placeholder,
            inputState: this.props.inputState
        }
    }
    inputOnchange = (ev) =>{
        this.setState({
            value: ev.target.value,
            inputState: '',
            placeholder: this.props.placeholder
        });
    };
    inputBlur = (ev) => {
        if(ev.target.value === ''){
            this.setState({
                placeholder: 'No Input',
                inputState: 'error'
            })
        }
    };
    inputClear = () => {
        this.setState({
            value: '',
            inputState: '',
            placeholder: this.props.placeholder
        });
    };
    inputFocus = () =>{
        this.setState({
            inputState: ''
        });
    };
    render() {
        const {value, placeholder, className, inputState} = this.state;
        const {name,type, iconType, ref} = this.props;
        const suffix = this.state.value !== "" ? <Icon type='close-circle' onClick={this.inputClear}/>: <Icon/>;
        return <Input
            placeholder={placeholder}
            value={value}
            name={name}
            type={type}
            size='large'
            prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }}/>}
            suffix={suffix}
            ref={ref}
            onChange={this.inputOnchange}
            className={className}
            onBlur={this.inputBlur}
            state={inputState}
            onFocus={this.inputFocus}
        />;
    }
}

export default MyInput;