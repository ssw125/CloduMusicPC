import { Menu } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'
export default function FindMusic() {
    return (
        <div style={{padding:20}}>
            <Menu style={{border:0,fontSize:18,marginTop:10}}  mode="horizontal" defaultSelectedKeys="1">
                <Menu.Item key="1"><NavLink to='recmusic'>个性推荐</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='exclusive'>专属定制</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='recomment'>歌单</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to='recomment'>排行榜</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to='recomment'>歌手</NavLink></Menu.Item>
                <Menu.Item key="6"><NavLink to='recomment'>最新音乐</NavLink></Menu.Item>
            </Menu>
            <Outlet></Outlet>
        </div>
  )
}
