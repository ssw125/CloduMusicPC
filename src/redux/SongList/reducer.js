export function SongsReducer(prestate=[],action){
    const {type,data} = action
    switch(type){
        case "GETsongs":
            return data
        default:
            return prestate
    }
}