const init = {}
export function MenuSongListReducer(prestate=init,action){
    const {type,data} = action
    switch (type) {
        case "GET":
            return data
        default:
           return prestate
    }
}