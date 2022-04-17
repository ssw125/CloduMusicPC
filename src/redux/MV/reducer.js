const init = {}
export function MV_Reducer(prestate=init,action){
    const {type,data} = action
    switch (type) {
        case "GETmv":
            return data
        default:
            return prestate
    }
}