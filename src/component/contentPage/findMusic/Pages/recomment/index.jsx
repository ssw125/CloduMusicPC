import { useEffect,useState } from 'react'
import {Carousel} from 'antd'
import RecMusic from './Music'
import MV from './MV'
import Request from '../../../../../server'
export default function Recommend() {
    const [current,setcur] = useState(0)
    const [coverimg,SetImg] = useState([])
    const currentIndex = (current)=>{
        setcur(current)
    }
    useEffect(()=>{
        Request.GET_Tag().then((res)=>{
            SetImg(res.data.data)
        })
    },[])
  return (
      <>
        <div style={{position:'relative',overflow:'hidden',marginTop:20,borderRadius:10}}>
            <img src={coverimg[current]?coverimg[current].cover:""} alt="aaa" style={{position:'absolute',width:"100%",filter:'blur(15px)'}}></img>
            <Carousel autoplay 
            style={{width:800,margin:'20px auto',borderRadius:10}}
            afterChange={currentIndex}
            >
                  {
                    coverimg.map((item,index)=>{
                        return (
                            <div key={index}>
                                <img src={item.cover} alt="failed" className='carousel'/>
                            </div>
                        )})
                    
                  }  
            </Carousel>
            </div>
            <RecMusic></RecMusic>
            <MV></MV>
    </>
  )
}
