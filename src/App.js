 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'
  
 import './App.css'
 import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
 
 function App() {
   return (
     <div>
      <Header/>
      <div className="container"> 
      
      <Body/>
      </div>
     </div>
   )
 }
 
 export default App
 