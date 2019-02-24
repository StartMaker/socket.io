import React from 'react';
import {Modal, Button, Form, Input, Dropdown, Empty, Menu, Select, Icon } from 'antd';
import {lazy} from 'react';

// const {OptGroup } = Select;
const { Option } = Select;
import UploadFiles from './uploadFIle/upload-files';
import UploadSql from "./uploadFIle/upload-sql";
// const UploadSql = lazy(()=> import('./uploadFile/upload-sql'));
// const Upload = lazy(() => import('./containers/Upload'));

class CreateDataForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:{
                visible: false
            },
            selectFileType: {
                fileType: 'excel'
            }
        }
    }
    closeForm = () => {
        this.setState({
            modal:{
                visible: false
            }
        });
    };
    openForm= () => {
        this.setState({
            modal:{
                visible: true
            }
        });
    };
    dropMenu = () =>{
        return (
            <Menu>
                <Menu.Item>excel</Menu.Item>
                <Menu.Item>excel</Menu.Item>
            </Menu>
        )
    };
    selectChange = (fileType) => {
        this.setState({
            selectFileType: {
                fileType: fileType
            }
        });
    };
    UploadModule = (type) => {
        switch (type) {
            case 'excel':
                return (
                    <UploadFiles/>
                );
            case 'mysql':
                return (
                    <UploadSql/>
                );
            default:
                return null;
        }
    };
    render(){
        const {state:{modal:{visible},selectFileType: {fileType}},closeForm, openForm, dropMenu,selectChange,UploadModule} = this;
        console.log(fileType);
        return (
            [
                <Button onClick={openForm}>+创建数据</Button>,
                <Modal
                    cancelText = '取消'
                    okText= '确认'
                    title='新建数据源'
                    visible={visible}
                    // onOk={false}
                    onCancel={closeForm}
                    centered={true}
                    className='side-modal-upload'>
                    <Form>
                        <Form.Item>
                            <Input.Group addonBefore={<label>数据源名称</label>}>
                                <Input addonBefore={<label>数据源名称</label>} size='large'/>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item>
                            <Input.Group>
                                <span className='ant-input-group-wrapper'>
                                    <span className='ant-input-wrapper ant-input-group'>
                                        <span className='ant-input-group-addon'>
                                            <lable>数据源类型</lable>
                                        </span>
                                        <Select defaultValue='excel' onChange={selectChange} size='large'>
                                            <Option value="excel">Excel</Option>
                                            <Option value="mysql">MySQL</Option>
                                        </Select>
                                    </span>
                                </span>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item>
                            <Input.Group className='upload'>
                                {
                                    UploadModule(fileType)
                                }
                                {/*<UploadSql/>*/}
                            </Input.Group>
                        </Form.Item>
                    </Form>
                </Modal>
            ]
        )
    }
}

export default CreateDataForm;