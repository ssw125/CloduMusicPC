import React, { useEffect, useRef } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { GetMV } from '../../../../../redux/actions'
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
                    mvList.map(item=>{
                        return (
                        <div className="catain"
                        key={item.id}>
                            <div className='tips'>
                                最新热门推荐MV
                            </div>
                            <img 
                            src={mvList.length>0?item.picUrl:"https://cn.bing.com/images/search?view=detailV2&ccid=Xd2zstio&id=4A258E14EADC678158AA0AFB5650D28F98D2C781&thid=OIP.Xd2zstiokv_VCthLHHem7wAAAA&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.5dddb3b2d8a892ffd50ad84b1c77a6ef%3frik%3dgcfSmI%252fSUFb7Cg%26riu%3dhttp%253a%252f%252fbpic.588ku.com%252felement_pic%252f01%252f37%252f92%252f40573c69065b76e.jpg%26ehk%3dDU136qmdiExyY3AO9Bj%252fvqvegNcUDh8tFUCjTQ15o%252fM%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=260&expw=260&q=%e5%8a%a0%e8%bd%bd%e7%9a%84%e5%9b%be%e7%89%87&simid=607997443309135697&FORM=IRPRST&ck=45A7C8B207447D5069A2E0A46796C55A&selectedIndex=38"} 
                            alt="falied" style={{width:"100%",height:158,borderRadius:10}}></img>
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
