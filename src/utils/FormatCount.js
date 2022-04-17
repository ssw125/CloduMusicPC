export function FormatCount(count){
    if(count>=100000000){
        return (count/100000000).toFixed(0) + '亿'
    }else if(count<100000000 && count>=10000){
        return (count/10000).toFixed(0) + '万'
    }else{
        return count
    }
}