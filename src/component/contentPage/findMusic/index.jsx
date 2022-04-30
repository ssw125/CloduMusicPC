import { Menu,Carousel, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
import Recomment from './component/Recommend'
import Img from '../../../img/109951167203321184.jpg'
import Request from '../../../server'
import MV from './component/MV'
export default function FindMusic(props) {
    const [current,setcur] = useState(0)
    const [coverimg,SetImg] = useState([])
    const currentIndex = (current)=>{
        setcur(current)
    }
    useEffect(()=>{
        Request.GET_Tag().then((res)=>{
            SetImg(res.data.data)
        })
    },[])
    return (
        <div style={{padding:20}}>
            <Menu style={{border:0,fontSize:18,marginTop:10}}  mode="horizontal" defaultSelectedKeys="1">
                <Menu.Item key="1"><NavLink to='recomment'>个性推荐</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/home/exclusive'>专属定制</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='recomment'>歌单</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to='recomment'>排行榜</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to='recomment'>歌手</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to='recomment'>最新音乐</NavLink></Menu.Item>
            </Menu>
            <div style={{position:'relative',overflow:'hidden',marginTop:20,borderRadius:10}}>
            <img src={coverimg[current]?coverimg[current].cover:Img} alt="aaa" style={{position:'absolute',width:"100%",filter:'blur(15px)'}}></img>
            <Spin spinning={coverimg.length>0?false:true}>
            <Carousel autoplay 
            style={{width:800,margin:'20px auto',borderRadius:10}}
            afterChange={currentIndex}
            >
                  {
                    coverimg.map(item=>{
                        return (
                            <div key={item.id}>
                                <img src={item.cover} alt="failed" className='carousel'/>
                            </div>
                        )})
                    
                  }  
            </Carousel>
            </Spin>
            </div>
            <Recomment></Recomment>
            <MV></MV>
        </div>
  )
}
