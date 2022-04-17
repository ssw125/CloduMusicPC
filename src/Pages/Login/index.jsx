import { useRef, useState } from 'react'
import { Form, Input, Button,Spin } from 'antd';
import { PhoneOutlined, KeyOutlined } from '@ant-design/icons';
import './index.css'
import Icon from '../../img/icon.png'
import { useNavigate } from 'react-router-dom';
import Request from '../../server'
export default function Login() {
    let [isLoading,setLoading] = useState(false)
    const navigate = useNavigate() 
    const Submit = ()=>{
        setLoading(true)
        Request.POST_PhoneLogin(NameNode.current.input.value,PasswordNode.current.input.value).then(res=>{
            setLoading(false)
            if(res.data.loginType){
                navigate("/home")
            }else{

            }
        })
    }
    const NameNode = useRef()
    const PasswordNode = useRef()

    const getKey = ()=>{
        const phone = parseInt(NameNode.current.input.value)
        Request.GET_Key(phone)
    }
  return (
    <Spin spinning={isLoading} style={{maxHeight:'100%'}}>
    <div className='login'>
        <div className='view'>
            <div className='title'>
                <img className='icon' alt='failed' src={Icon}></img>
                <div>网易云音乐</div>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ phone:localStorage.getItem("name"),remember: false }}
                >
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}
                    style={{marginBottom:"30px"}}
                >
                    <Input size="large" ref={NameNode}  prefix={<PhoneOutlined/>} placeholder="Phone"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Verification code' }]}
                    style={{marginBottom:"30px"}}
                >
                    <div>
                        <Input
                        size="large"
                        prefix={<KeyOutlined/>}
                        type="password"
                        placeholder="Verification code"
                        ref={PasswordNode}
                        // style={{width:'60%',marginRight:"5%"}}
                        />
                        {/* <Button type="primary" ref={ButtonNode} shape="round" size="large" disabled={ButtonType} onClick={getKey}>{text}</Button> */}
                    </div>
                </Form.Item>
                <Form.Item style={{marginBottom:"30px"}} name="login">
                    <Button type="primary" shape="round" size="large" onClick={Submit}  className="login-form-button">
                        立即登录
                    </Button>
                </Form.Item>
                </Form>
        </div>
    </div>
    </Spin>
  )
}
