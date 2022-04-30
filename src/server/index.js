import axios from "axios";
let BASE_URL = ""
if(process.env.NODE_ENV === "development"){
    BASE_URL = "/api"
}else{
    BASE_URL = "https://netease-cloud-music-api-six-lovat.vercel.app"
}

class Request {
    constructor(){
        this.instance = axios.create({
            baseURL:BASE_URL,
            timeout:10000,
        })
    }

    //手机密码登录
    POST_PhoneLogin(phone,password){
        return this.instance.post("/login/cellphone",{
            phone,
            password
        })
    }

    //获取验证码
    GET_Key(phone){
        this.instance.get("/captcha/sent",{
            params:{
                phone
            }
        })
    }

    Check_Captcha(phone,captcha){
        return this.instance.get("/captcha/verify",{
            params:{
                phone,
                captcha
            }
        })
    }

    GET_Tag(){
        return this.instance.get('/mv/first',{
            params:{
                limit:4 
            }
        })
    }

    GET_SongMenu(){
       return this.instance.get("/top/playlist",{
           params:{
            limit:10
           }
       })
    }

    GET_mv(){
        return this.instance.get("/personalized/mv")
    }

    GET_SongList(id){
        return this.instance.get("/playlist/track/all",{
            params:{
                id
            }
        })
    }

    GET_SongUrl(id){
        return this.instance.get("/song/url",{
            params:{
                id
            }
        })
    }

    GET_LoginState(){
        return this.instance.get('/login/status')
    }

    LoginOut(){
        return this.instance.get('/logout')
    }

    //生成二维码key
    getQR_key(){
        return this.instance.get('/login/qr/key')
    }

    //生成二维码base64图片
    getQR_pir(keys){
        return this.instance.get('/login/qr/create',{
            params:{
                key:keys,
                qrimg:true
            }
        })
    }

    //获取二维码state
    getQR_state(keys){
        return this.instance.get('/login/qr/check',{
            params:{
                key:keys
            }
        })
    }
}

export default new Request()