import './index.css'
import './App.less'
import { useRoutes } from 'react-router-dom'
import {routes} from './routes'
export default function App() {
    const element = useRoutes(routes)
    return (
        <>
        {element}
        </>      
    )
}
