import ReactDOM from 'react-dom'
import App from "./App"
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store,persiststore} from './redux'
import {PersistGate} from 'redux-persist/lib/integration/react'
ReactDOM.render(<BrowserRouter>
<Provider store={store}>
    <PersistGate loading={null} persistor={persiststore}>
        <App/>
    </PersistGate>
</Provider>
</BrowserRouter>,document.querySelector("#app"))