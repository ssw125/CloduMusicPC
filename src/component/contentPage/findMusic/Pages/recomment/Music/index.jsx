import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {CreatGetMenuSong} from '../../../../../../redux/actions'
import { PlayCircleOutlined,CaretRightOutlined } from '@ant-design/icons'
import './index.css'
import {FormatCount} from '../../../../../../utils/FormatCount'
import { useNavigate } from 'react-router-dom'
function RecMusic(props) {
    const nav = useNavigate()
    useEffect(()=>{
       props.getList()
    },[])
    const playlists = props.list.playlists ?? []
    const detail = (index,id)=>{
        nav(`/home/songlist/${index}/${id}`)
    }
    return (
        <div className='space-y-6' style={{marginTop:20}}>
            <div style={{fontSize:24,fontWeight:600}}>推荐歌单</div>
            <div className='flex overflow-hidden space-y-4  justify-center'>
            <div className='flex justify-evenly flex-wrap'>
            {
                 playlists.map((item,index)=>{
                         return (
                         <div className="contt mt-2 mb-2" key={item.id} onClick={()=>{detail(index,item.id)}}>
                             <div style={{position:'absolute',color:'white',right:0}}>
                                <CaretRightOutlined></CaretRightOutlined>
                                <span>{FormatCount(item.playCount)}</span>
                             </div>
                             <div className='relative'>
                                <PlayCircleOutlined className='icon top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:top-56 xl:left-56'/>
                                <img src={item.coverImgUrl} style={{width:'100%',borderRadius:10}} alt="failed"></img>
                             </div>
                             <span className='des'>{item.description}</span>
                         </div>
                         
                     )
                 })
             }
            </div>
            </div>
        </div>
    )
}

export default connect((state)=>{
    return {list:state.MenuSongListReducer}
},{
    getList:CreatGetMenuSong
})(RecMusic)
