import React, { useState } from 'react'
import Header from './Header';
import { Outlet } from 'react-router';
import { ThemeProvider } from '../../contexts/ThemeContext';

const App = () =>{
   return <>
   <ThemeProvider>
   <Header/>
   <Outlet/>
   </ThemeProvider>
   </>
}

export default App;