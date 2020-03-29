import React from 'react';
import {Form, Input, Button, Radio} from 'antd';

const layout = {
    labelCol: {
        span: 8,
        align: 'center',
    },
    wrapperCol: {
        span: 16,
    },


};

class Setup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputVal: '',

        }


    }

    formRef = React.createRef();

    onGenderChange = value => {
        this.formRef.current.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = values => {
        alert(11)
    }


    render() {

        return (
            <center>
                <Form  className='layout_setup'  {...layout} ref={this.formRef} name="control-ref"
                      onFinish={this.onFinish}>
                    <Form.Item
                        name="name"
                        label="姓名"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="你的姓名"/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="电话"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="你的联系方式"/>
                    </Form.Item>
                    <Form.Item style={{textAlign: "left"}} label="学历" name="layout">
                        <Radio.Group>
                            <Radio.Button value="horizontal">专科</Radio.Button>
                            <Radio.Button value="vertical">本科</Radio.Button>
                            <Radio.Button value="inline">其他</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="QQ"
                        label="QQ"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder=""/>
                    </Form.Item>
                </Form>
                <Button type="primary" size={"large"}>提交</Button>
            </center>

        );
    }
}

export default Setup;
