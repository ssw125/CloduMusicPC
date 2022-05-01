import React, { useEffect } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { GetMV } from '../../../../../../redux/actions'
function MV(props) {
    useEffect(()=>{
        props.getlist()
    },[])
    const mvList = props.mvList.result??[]
    return (
        <div>
            <div style={{fontSize:24,fontWeight:600,margin:"20px 5px"}}>推荐mv</div>
            <div className='mv'>
                {
                    mvList.map((item,index)=>{
                        return (
                        <div className="catain"
                        key={index}>
                            <div className='tips'>
                                最新热门推荐MV
                            </div>
                            <img 
                            src={item.picUrl} 
                            alt="aaa" style={{width:"100%",height:158,borderRadius:10}}></img>
                            <span className='line'>{item.name}</span>
                            <div style={{fontSize:12}}>{item.artistName}</div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default connect(
    state=>({
        mvList:state.MV_Reducer
    }),{
        getlist:GetMV
    }
)(MV)
