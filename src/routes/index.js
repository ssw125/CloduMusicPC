import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import FindMusic from "../component/contentPage/findMusic";
import SongList from "../component/SongList";
import Exclusive from "../component/contentPage/findMusic/Pages/Exclusive"
import Recommend from "../component/contentPage/findMusic/Pages/recomment";
export const routes = [{
    path:'/home',
    element:<Home/>,
    children:[{
        path:'findmusic',
        element:<FindMusic></FindMusic>,
        children:[{
            path:'/home/findmusic',
            element:<Navigate to="/home/findmusic/recmusic"></Navigate>,
        },{
            path:'exclusive',
            element:<Exclusive></Exclusive>
        },{
            path:'recmusic',
            element:<Recommend></Recommend>
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
    element:<Navigate to="/home/findmusic"></Navigate>
}]