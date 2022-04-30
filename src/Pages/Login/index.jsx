import { useRef, useState } from 'react'
import { Form, Input, Button,Spin,Image,Modal } from 'antd';
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
        if(currentIndex===0){
            Request.POST_PhoneLogin(NameNode.current.input.value,PasswordNode.current.input.value).then(res=>{
                setLoading(false)
                if(res.data.loginType){
                    navigate("/home")
                }else{
                    Modal.error({
                        content:"请检查密码或手机号是否正确！"
                    })
                }
            })
        }else if(currentIndex===1){
            if(NameNode.current.input.value.length===11&&PasswordNode.current.input.value.length===4){
                Request.Check_Captcha(NameNode.current.input.value,PasswordNode.current.input.value).then(res=>{
                    setLoading(false)
                    if(res.data.data){
                        navigate("/home")
                    }else{
                        Modal.error({
                            content:"请检查密码或手机号是否正确！"
                        })
                    }
                })
            }
            else{
                setLoading(false)
            }
        }
    }
    const NameNode = useRef()
    const PasswordNode = useRef()
    const [currentIndex,setIndex] = useState(0)
    const allinfo = [['请输入你的手机号码','请输入你的密码'],['请输入你的手机号码','请输入六位验证码']]
    const [QRurl,setQR] = useState('') 
    const [message,setmessage] = useState('请扫描二维码') 
    const [isSend,setstate] = useState(false)
    const sendKey = ()=>{
        if(NameNode.current.input.value.length===11){
            setstate(true)
            Request.GET_Key(NameNode.current.input.value)
        }
    }
    let timer

    const changePanel = (index)=>{
        setIndex(index)
        clearInterval(timer)
    }
    
    const QR_Process = async function(){
        setIndex(2)
        const {data:{data:{unikey}}} = await Request.getQR_key()
        console.log(unikey)
        const {data:{data:{qrimg}}}= await Request.getQR_pir(unikey)
        setQR(qrimg)
        //开启轮询
        timer = setInterval(()=>{
            Request.getQR_state(unikey).then(res=>{
                if(res.data.code===800){
                    clearInterval(timer)
                    setmessage('二维码失效，请重新刷新')
                    QR_Process()
                }
                if(res.data.code===803){
                    navigate("/home")
                    clearInterval(timer)
                    console.log("登陆成功")
                }else if(res.data.code===802){
                     setmessage('等待确认')
                }
            })
        },500)
    }
  return (
    <Spin spinning={isLoading} style={{maxHeight:'100%'}}>
    <div className='login'>
        <div className=' relative'>
        <ul className='flex space-x-2 absolute -top-10 left-2'>
            <li className={`bg-black text-white px-4 py-2 rounded-md cursor-pointer h-28 ${currentIndex===0?'':'hover:animate-float'}`} style={currentIndex===0?{transform:['translateY(-20px)'],animationName:''}:{}} onClick={(e)=>changePanel(0)}>账号登录</li>
            <li className={`bg-black text-white px-4 py-2 rounded-md cursor-pointer h-28 ${currentIndex===1?'':'hover:animate-float'}`} style={currentIndex===1?{transform:['translateY(-20px)'],animationName:''}:{}} onClick={(e)=>changePanel(1)}>短信登录</li>
            <li className={`bg-black text-white px-4 py-2 rounded-md cursor-pointer h-28 ${currentIndex===2?'':'hover:animate-float'}`} style={currentIndex===2?{transform:['translateY(-20px)'],animationName:''}:{}} onClick={QR_Process}>扫码登录</li>
        </ul>
        <div className='view'>
            <div className=' text-white text-3xl text-center py-4'>
                <img className='icon' alt='failed' src={Icon}></img>
                <div>网易云音乐</div>
            </div>
            {currentIndex===2?
            <div className=' flex items-center flex-col space-y-2 relative'>
                <Image
                    preview={false}
                    width={200}
                    height={200}
                    src={QRurl}
                    fallback="data:image/png;base64,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"
                    />
                <div className=' text-center text-white text-lg'>{message}</div>
            </div>
            :
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ phone:localStorage.getItem("name"),remember: false }}
                >
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message:'Please input your Verification phone'}]}
                    style={{marginBottom:"30px"}}
                >
                    <Input size="large" ref={NameNode}  prefix={<PhoneOutlined/>} placeholder={allinfo[currentIndex][0]}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Verification code'}]}
                    style={{marginBottom:"30px"}}
                >
                    <div className='flex items-center space-x-3'>
                        <Input
                        size="large"
                        prefix={<KeyOutlined/>}
                        type="password"
                        placeholder={allinfo[currentIndex][1]}
                        ref={PasswordNode}
                        className=''
                        />
                        <Button style={currentIndex===1?{}:{display:'none'}} onClick={sendKey}>{isSend?`验证码已发送`:"发送验证码"}</Button>
                    </div>
                </Form.Item>
                <Form.Item style={{marginBottom:"30px"}} name="login">
                    <Button type="primary" shape="round" size="large" onClick={Submit}  className="login-form-button">
                        立即登录
                    </Button>
                </Form.Item>
            </Form>}
            </div>
        </div>
        </div>
    </Spin>
  )
}
