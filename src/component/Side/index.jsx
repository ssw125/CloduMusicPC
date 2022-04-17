import { Menu,Layout } from 'antd'
import React from 'react'
import { nanoid } from 'nanoid'
import { NavLink,Outlet } from 'react-router-dom'
export default function Side() {
    const {Sider,Content} = Layout
    const list = [{
        id:nanoid(),
        title:'发现音乐',
        path:'findmusic'
    },{
        id:nanoid(),
        title:'播客',
        path:'player'
    },{
        id:nanoid(),
        title:'视频',
        path:'video'
    },{
        id:nanoid(),
        title:'关注',
        path:'concern'
    },{
        id:nanoid(),
        title:'私人FM',
        path:'fm'
    }]
    return (
        <Layout>
            <Sider style={{backgroundColor:'#ffffff',borderRight:'1px solid #e1e1e1'}}>
                <Menu defaultSelectedKeys={[list[0].id]}>
                    {list.map(item=><Menu.Item key={item.id}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>)}
                </Menu>
                <div style={{margin:'10px 15px',fontSize:12,color:'#bcbcbc'}}>我的音乐</div>
                <Menu defaultSelectedKeys={[list[0].id]}>
                    <Menu.Item key={nanoid()}><NavLink to='local'>本地与下载</NavLink></Menu.Item>
                    <Menu.Item key={nanoid()}><NavLink to='rencent'>最近播放</NavLink></Menu.Item>
                </Menu>
            </Sider>
            <Content style={{backgroundColor:'#ffffff',overflow:'auto'}}>
                <Outlet></Outlet>
            </Content>
        </Layout>
    )
}
