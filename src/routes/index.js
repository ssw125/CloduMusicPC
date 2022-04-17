import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import FindMusic from "../component/contentPage/findMusic";
import SongList from "../component/SongList";
export const routes = [{
    path:'/home',
    element:<Home/>,
    children:[{
        path:'findmusic',
        element:<FindMusic></FindMusic>
    },{
        path:'songlist/:index/:id',
        element:<SongList></SongList>
    },{
        path:'',
        element:<Navigate to="/home/findmusic"></Navigate>
    }]
},{
    path:'/login',
    element:<Login/>
},{
    path:'/',
    element:<Navigate to="/login"></Navigate>
}]