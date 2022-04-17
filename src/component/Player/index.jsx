import { useState,useRef, useEffect } from 'react'
import { Slider } from 'antd'
import { bus } from '../../eventBus'
import Request from '../../server/index'
export default function Player() {

  const [info,setInfo] = useState({
    img:'https://img.88icon.com/upload/jpg/20210524/4d701ad487e28c7ae2c97184064c65e9_67077_800_800.jpg!88con'
  })
  const Player = useRef() 
  const [musicUrl,seturl] = useState("")
  const [PlayList,setList] = useState([])
  const [MusicIndex,setIndex] = useState()
  const [currentTime,setTime] = useState(0)
  const [isPlay,setPlay] = useState(false)
  
  useEffect(()=>{
    bus.on('play',(index)=>{
      setPlay(true)
      setIndex(index)
      const musicList = JSON.parse(JSON.parse(sessionStorage.getItem('persist:currentPlay')).songs)
      setList(musicList)//异步
      Player.current.pause()
      setInfo(musicList[index])//异步
      Request.GET_SongUrl(musicList[index].id).then(res=>{
        seturl(res.data.data[0].url)
        Player.current.play()
      })
    })
  },[])
  
  const Play = ()=>{
    if(isPlay){
      Player.current.pause()
    }else{
      Player.current.play()
    }
    setPlay(!isPlay)
  }
  

  const nextMusic = ()=>{//下一首
    Player.current.pause()
    setPlay(true)
    if(MusicIndex+1<PlayList.length){
      setIndex(MusicIndex+1)
    }else{
      setIndex(0)
    }
    Request.GET_SongUrl(PlayList[MusicIndex+1].id).then(res=>{
      seturl(res.data.data[0].url)
      setInfo(PlayList[MusicIndex+1])
      Player.current.play()
    })
  }

  const preMusic = ()=>{//上一首
    Player.current.pause()
    setPlay(true)
    if(MusicIndex-1<0){
      setIndex(PlayList.length-1)
    }else{
      setIndex(MusicIndex-1)
    }
    Request.GET_SongUrl(PlayList[MusicIndex+1].id).then(res=>{
      seturl(res.data.data[0].url)
      setInfo(PlayList[MusicIndex+1])
      Player.current.play()
    })
  }
  return (
    <>
    <audio src={musicUrl} ref={Player} autoPlay onTimeUpdate={()=>{setTime(Player.current.currentTime)}}></audio>
    <div style={{display:'flex',alignItems:'center'}}>
      <div style={{flex:1,display:'flex'}} className=' space-x-5'>
        <img src={info.al?.picUrl??info.img} style={{width:60,height:60,borderRadius:10}} alt='加载失败'></img>
        <div className='text-gray-500 space-y-4'>
          <div>{info.name}</div>
          <div>{info.ar?info.ar.map(item=>item.name):''}</div>
        </div>
      </div>
      <div  className='grow-2' >
        <div className=' flex justify-center items-center space-x-10'>
          <div onClick={preMusic} className='rounded-full hover:bg-slate-200 bg-slate-100 w-10 h-10 flex justify-center items-center cursor-pointer'>
            <svg t="1650121803733" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20447" width="20" height="20"><path d="M240.4 65.4c71.3 0 129.1 57.8 129.1 129.1v208.6C469.6 320 728.1 103 754.7 83.6c23.3-17 107.5-50.1 143.9 45 6.7 17.7 14.1 347.1 14.1 347.1S905 858.6 901 872.2c-26.7 91.6-120.2 68-147.5 47.5-18.5-13.9-281.2-234.6-384-319.1V831c0 71.3-57.8 129.1-129.1 129.1S111.3 902.3 111.3 831V194.6c0-71.3 57.8-129.2 129.1-129.2z" fill="#d81e06" p-id="20448"></path></svg>
          </div>
          <div className='rounded-full hover:bg-slate-200 bg-slate-100 w-10 h-10 flex justify-center items-center cursor-pointer' onClick={Play}>
            <svg t="1650118459651" style={{display:isPlay?'block':'none'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15791" width="20" height="20"><path d="M280.5 64c-77.1 0-139.6 62.5-139.6 139.5v616.9c0 77.1 62.5 139.6 139.6 139.6s139.6-62.4 139.6-139.6V203.5c0-77-62.5-139.5-139.6-139.5z m463 0c-77.1 0-139.6 62.5-139.6 139.5v616.9c0 77.1 62.5 139.6 139.6 139.6s139.6-62.4 139.6-139.6V203.5c0-77-62.5-139.5-139.6-139.5z" fill="#d81e06" p-id="15792"></path></svg>
            <svg t="1650118544207" style={{display:isPlay?'none':'block'}}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15993" width="20" height="20"><path d="M785.9 443.3C758.3 421.9 385.2 108 352.6 84.2c-23.9-17.4-119.8-51.4-157.1 46.1-6.9 18.1-4.8 355.6-4.8 355.6s-1.8 392.3 2.3 406.3c27.3 93.8 132.8 69.7 160.8 48.6C376.2 924 747.7 611.7 786 582.5c69.8-63 57-97-0.1-139.2z" fill="#d81e06" p-id="15994"></path></svg>
          </div>
          <div onClick={nextMusic} className='rounded-full hover:bg-slate-200 bg-slate-100 w-10 h-10 flex justify-center items-center cursor-pointer'>
            <svg t="1650121689928" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18991" width="20" height="20"><path d="M783.6 65.4c-71.3 0-129.1 57.8-129.1 129.1v208.6c-100.1-83-358.6-300-385.2-319.4-23.3-17-107.5-50.1-143.9 45-6.7 17.7-14.1 347.1-14.1 347.1S119 858.7 123 872.3c26.7 91.6 120.2 68 147.5 47.5 18.6-13.9 281.3-234.5 384.1-319.1v230.4c0 71.3 57.8 129.1 129.1 129.1s129.1-57.8 129.1-129.1V194.6c-0.1-71.3-57.9-129.2-129.2-129.2z" fill="#d81e06" p-id="18992"></path></svg>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className=' w-1/2'>
            <Slider min={0} value={currentTime} max={(info.dt/1000).toFixed()??0} onChange={(value)=>{Player.current.currentTime = value}}></Slider>
          </div>
        </div>
      </div>
      <div style={{flex:1}}>

      </div>
    </div>
    </>
  )
}
