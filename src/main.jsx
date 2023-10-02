import React from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import { NewsContextProvider } from "./context/NewsContextProvider"

import App from "./App"
import './main.css'

const root = createRoot(document.getElementById('root'));
root.render(
   <NewsContextProvider>
       <Router>
           <App/>
       </Router>
    </NewsContextProvider> 
)