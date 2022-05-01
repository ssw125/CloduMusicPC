import React, { useEffect, useState } from 'react'
import {Form,Input,Badge,Avatar,Modal} from 'antd'
import {SearchOutlined,UserOutlined} from '@ant-design/icons'
import Icon from '../../img/logo.png'
import './index.css'
import Request from '../../server'
import { useNavigate } from 'react-router-dom'
export default function Head() {
  const nav = useNavigate()
  const [userInfo,setInfo] = useState({})
  const [isOutLogin,setOut] = useState(false)
  useEffect(()=>{
    Request.GET_LoginState().then(res=>{
      setInfo(res.data.data.profile)
    })
  },[])
  const isoutLogin = ()=>{
    // Request.LoginOut()
    // nav('/login')
    setOut(true)
  }
  const LoginOut = ()=>{
    Request.LoginOut()
    nav('/login')
  }
  const noLoginOut = ()=>{
    setOut(false)
  }
  return (
    <>
    <Modal visible={isOutLogin} onOk={LoginOut} onCancel={noLoginOut}>
      <span>是否退出登录</span>
    </Modal>
   <div className='music_logo'>
    <img src={Icon} alt="failed" style={{height:'30px',width:'30px',borderRadius:'15px'}}></img>
    <div className='hidden tablet:block' style={{color:'white',fontSize:'25px',lineHeight: '30px',height: '34px',marginLeft:'10px'}}>网易云音乐</div>
  </div>
  <div className='music_search'>
    <Form style={{height:35}}>
      <Form.Item style={{height:20,display:'flex'}}>
      <Input prefix={<SearchOutlined style={{color:'#bfcde0',cursor:'pointer'}}/>} placeholder="搜索你喜欢的歌曲吧"  bordered={false}  style={{ width: 160,border:0,padding:"0 2px 0 5px"}} size="small"></Input>
      </Form.Item>
    </Form>
  </div>
  <div className='user'>
    <div className='relative'>
      <Badge className='peer cursor-pointer'>
        <Avatar style={{marginLeft:200,marginRight:15}} src={userInfo.avatarUrl} icon={<UserOutlined />}/>
      </Badge>
      <div className='absolute bg-white w-20 h-24 -right-2 top-14 z-10 py-2 invisible hover:visible peer-hover:visible peer-hover:animate-show'>
        <div className='absolute w-4 h-4 bg-white rotate-45 left-8 -top-2 -z-10'></div>
        <div className='h-1/2 justify-center flex items-center hover:bg-gray-200 cursor-pointer'>主页</div>
        <div className='h-1/2 justify-center flex items-center hover:bg-gray-200 cursor-pointer' onClick={isoutLogin}>退出登录</div>
      </div>
    </div>
    <span className=' hidden tablet:inline' style={{color:'white'}}>{userInfo?.nickname?userInfo.nickname:'未登录'}</span>
  </div>
  </>
  )
}
