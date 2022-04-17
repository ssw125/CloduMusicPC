export function formatTime(ms){
    let seconds = ms/1000
    if(seconds>60){
        const minus = (seconds/60)>=10?(seconds/60).toFixed(0):"0"+(seconds/60).toFixed(0)
        const second = (minus%60)>=10?(minus%60):"0"+(minus%60)
        return (minus+":"+second)
    }else{
        const t = seconds>=10?seconds.toFixed(0):"0"+seconds.toFixed(0)
        return ("00:"+t)
    }
}