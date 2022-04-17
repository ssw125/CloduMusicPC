import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import ListHead from './component/ListHead'
import SongLists from './component/SongLists'
import { GetSongs } from '../../redux/actions' 
function SongList(props) {
    const {index,id} = useParams()
    const list = localStorage.getItem("currentSonglist_id")===id?props.songs.songs:[]
    const songlists = JSON.parse(JSON.parse(sessionStorage.getItem("persist:songlists")).playlists)[parseInt(index)]
    const {coverImgUrl,description,tracks,tags,name,playCount,shareCount,
    subscribedCount,creator,createTime,trackCount} = songlists
    const descriptions = {coverImgUrl,description,tracks,tags,name,playCount,shareCount,
        subscribedCount,creator,createTime,trackCount}
    useEffect(()=>{
        if(localStorage.getItem("currentSonglist_id")){
            if(JSON.parse(localStorage.getItem("currentSonglist_id"))===id){
                
            }else{
                props.getSongs(id)
                localStorage.setItem("currentSonglist_id",id)
            }
        }else{
            props.getSongs(id)
            localStorage.setItem("currentSonglist_id",id)
        }
    },[])
    return (
        <div className='px-40 py-10 flex flex-col justify-center space-y-5'>
            <ListHead {...descriptions}></ListHead>
            <SongLists songlist={list}></SongLists>
        </div>
    )
}
export default connect(
    state => ({songs:state.SongsReducer}),
    {
        getSongs:GetSongs
    }
)(SongList)