import Request from '../server'
export const GET_Action = (data)=>{return ({type:"GET",data})}
export const GET_mvAct =  (data)=>{return ({type:"GETmv",data})}
export const GET_SongAct = (data)=>{return ({type:"GETsongs",data})}
export const CreatGetMenuSong = ()=>{
    return async (dispatch) =>{
       const res = await Request.GET_SongMenu()
       dispatch(GET_Action(res.data))
    }
}

export const GetMV = ()=>{
    return async (dispatch) =>{
        const res = await Request.GET_mv()
        dispatch(GET_mvAct(res.data))
    }
}

export const GetSongs = (id)=>{
    return async (dispatch) =>{
        const res = await Request.GET_SongList(id)
        dispatch(GET_SongAct(res.data))
    }
} 