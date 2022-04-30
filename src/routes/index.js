import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import FindMusic from "../component/contentPage/findMusic";
import SongList from "../component/SongList";
import Exclusive from "../component/contentPage/findMusic/component/Exclusive";
export const routes = [{
    path:'/home',
    element:<Home/>,
    children:[{
        path:'findmusic',
        element:<FindMusic></FindMusic>,
        children:[{
            path:'recomment',
            element:<Navigate to="/home/findmusic"></Navigate>,
        },{
            path:'exclusive',
            element:<Exclusive></Exclusive>
        }]
    },{
        path:'songlist/:index/:id',
        element:<SongList></SongList>
    },]
},{
    path:'/login',
    element:<Login/>
},{
    path:'/',
    element:<Navigate to="/home"></Navigate>
}]