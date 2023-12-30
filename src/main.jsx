import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appprovider } from './contextapi/Contextapi.jsx'
import Cart from './contextapi/Cart.jsx'
import FeatureProductProvider from './contextapi/Featuredapi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appprovider>
     <Cart>
      <FeatureProductProvider>
       <App />
       </FeatureProductProvider>
     </Cart>
    </Appprovider>
  </React.StrictMode>,
)

