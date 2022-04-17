import React from 'react'
import {Button} from 'antd'
import {CaretRightOutlined,FileAddOutlined,ShareAltOutlined,DownloadOutlined,PoweroffOutlined} from '@ant-design/icons'
import {FormatCount} from '../../../../utils/FormatCount'
export default function ListHead(props) {
  return (
    <div className='flex items-center h-56 space-x-5 overflow-hidden'>
        <img src={props.coverImgUrl!==""?props.coverImgUrl:"https://img.tukuppt.com/ad_preview/00/31/66/m7KbKUa5Ur.jpg!/fw/260"} 
        className='h-56  rounded-md'
        alt="failed"></img>
        <div className='flex flex-col h-full justify-between'>

            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{width:40,border:'1px solid red',
                        textAlign:'center',color:'red',borderRadius:2}}>歌单</div>
                <span style={{fontWeight:600,fontSize:25,marginLeft:10}}>{props.name}</span>
            </div>

            <div style={{display:'flex',alignItems:'center'}}>
                <img src={props.creator.avatarUrl??"https://img.tukuppt.com/ad_preview/00/31/66/m7KbKUa5Ur.jpg!/fw/260"} alt="failed" style={{width:30,height:30,borderRadius:30}}></img>
                <span style={{marginLeft:10,color:'#5e58c1'}}>{props.creator.nickname}</span>
                <span>{props.creator.createTime}</span>
            </div>
            <div className='flex space-x-3'>
                <Button style={{ display:'flex',alignItems:'center'}} type="primary" shape="round" size='small'>
                    <CaretRightOutlined/> 
                    <span>播放列表</span>
                </Button>
                <Button shape="round" size='small' style={{ display:'flex',alignItems:'center'}}>
                    <FileAddOutlined/>收藏 {FormatCount(props.subscribedCount)}
                </Button>
                <Button shape="round" size='small' style={{ display:'flex',alignItems:'center'}}>
                    <ShareAltOutlined />分享 {FormatCount(props.shareCount)}
                </Button>
                <Button shape="round" size='small' style={{ display:'flex',alignItems:'center'}}>
                    <DownloadOutlined />下载全部
                </Button>
            </div>
            <div>
                标签:{
                    props.tags?.map((item,index)=><span style={{color:'red',margin:"0 5px"}} key={index}>{item}</span>)
                }
            </div>
            <div style={{color:'#676767'}}>
                <div>歌曲: {FormatCount(props.trackCount)}</div>
                <div style={{margin:"5px 0"}}>播放: {FormatCount(props.playCount)}</div>
                <div className=' w-1/2 truncate'>简介: {props.description}</div>
            </div>
        </div>
    </div>
  )
}
