import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {CreatGetMenuSong} from '../../../../../redux/actions'
import { PlayCircleOutlined,CaretRightOutlined } from '@ant-design/icons'
import './index.css'
import {FormatCount} from '../../../../../utils/FormatCount'
import { useNavigate } from 'react-router-dom'
function Recomment(props) {
    const nav = useNavigate()
    useEffect(()=>{
       props.getList()
    },[])
    const playlists = props.list.playlists ?? []
    const detail = (index,id)=>{
        nav(`/home/songlist/${index}/${id}`)
    }
    return (
        <div style={{marginTop:20}}>
            <div style={{fontSize:24,fontWeight:600,margin:'20px 5px'}}>推荐歌单</div>
            <div style={{display:'flex',flexWrap:'wrap',padding:'0 30px'}}>
            {
                 playlists.map((item,index)=>{
                         return (
                         <div className="contt" key={item.id} onClick={()=>{detail(index,item.id)}}>
                            <PlayCircleOutlined className='icon'/>
                            <div style={{position:'absolute',color:'white',right:0}}>
                                <CaretRightOutlined></CaretRightOutlined>
                                <span>{FormatCount(item.playCount)}</span>
                             </div>
                             <img src={item.coverImgUrl} style={{width:'100%',borderRadius:10}} alt="failed"></img>
                             <span className='des'>{item.description}</span>
                         </div>
                         
                     )
                 })
             }
            </div>
        </div>
    )
}

export default connect((state)=>{
    return {list:state.MenuSongListReducer}
},{
    getList:CreatGetMenuSong
})(Recomment)
