import { bus } from '../../../../eventBus'
import { Menu } from 'antd'
import styles from './index.module.css'
import {DownloadOutlined,HeartFilled} from '@ant-design/icons'
import {formatTime} from '../../../../utils/FormatTimems'
import { Skeleton } from 'antd'
export default function SongLists(props) {
    const play = (index)=>{
        bus.emit('play',index)
    }
    return (
        <Skeleton active loading={props.songlist.length<=0?true:false}>
        <div className='flex flex-col justify-center space-y-2 overflow-hidden'>
            <Menu  mode="horizontal" style={{fontSize:20,borderBottom:0}} className="mx-2">
                <Menu.Item key="list" style={{paddingLeft:0}}>歌曲列表</Menu.Item>
                <Menu.Item key="commemnt" >评论</Menu.Item>
                <Menu.Item key="shou" >收藏者</Menu.Item>
            </Menu>
            <div>
                <div className='flex h-8'>
                    <div style={{width:'8%'}} className='h-6 flex items-center hover:bg-slate-200'>序号</div>
                    <div style={{width:'15%'}} className='h-6 flex items-center hover:bg-slate-200'>操作</div>
                    <div style={{flex:5}} className='h-6 flex items-center hover:bg-slate-200'>标题</div>
                    <div style={{flex:3}} className='h-6 flex items-center hover:bg-slate-200'>歌手</div>
                    <div style={{flex:3}} className='h-6 flex items-center hover:bg-slate-200'>专辑</div>
                    <div style={{flex:2}} className='h-6 flex items-center hover:bg-slate-200'>时间</div>
                </div>
                <div className=''>
                    {
                        props.songlist?.map((item,index)=>{
                            return(
                                    <div className='flex even:bg-gray-100 items-center h-6 hover:bg-gray-300' key={item.id}>
                                        <div style={{width:'8%',color:'#cacae1',fontSize:14}}>{index+1}</div>
                                        <div style={{width:'15%'}} className='flex items-center space-x-2'>
                                            <input type="checkbox" className='peer' id={item.id} style={{display:"none"}}></input>
                                            <label htmlFor={item.id} className='flex items-center cursor-pointer text-gray-400 peer-checked:text-red-600'>
                                                <HeartFilled className='text-base'/>
                                            </label>
                                            <DownloadOutlined style={{fontSize:20,cursor:'pointer'}}/>
                                        </div>
                                        <div style={{fontSize:14,color:'black',flex:5}} className='cursor-pointer pr-3 truncate' onClick={()=>{play(index)}}>
                                            <span>{item.name}</span>
                                        </div>
                                        <div style={{fontSize:14,flex:3}}>

                                            {
                                                item.ar[0].name
                                            }
                                        </div>
                                        <div style={{fontSize:14,flex:3,paddingRight:10}} className={styles.limit}>
                                            {item.al.name}
                                        </div>
                                        <div style={{fontSize:14,flex:2}}>
                                            {formatTime(item.dt)}
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </Skeleton>
    )
}
