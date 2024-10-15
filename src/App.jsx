import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import RecipeReviewCard from './components/Home'
import DenseMenu from './components/Contact'
import BasicPagination from './components/About'
import BasicTable from './components/Footer'
import NotFound from './NotFound'
import './App.css'
function App() {
  return (
    <div>
    <Navbar/>           
    <Routes>
    <Route path='/' element={<h1 className='text-center'>MAin Page</h1>} />
      <Route path='home' element={<RecipeReviewCard/>} />
      <Route path='about' element={<DenseMenu/>} />
      <Route path='contact' element={<BasicPagination/>} />
      <Route path='/*' element={<NotFound/>} />


    </Routes>
    <BasicTable/>

      
      {/* <RecipeReviewCard/>
      <DenseMenu/>
      <BasicPagination/>
       */}


      
    </div>
  )
}

export default App
