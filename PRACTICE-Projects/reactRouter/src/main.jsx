import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact-us/contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/Github/Github.jsx'
import {githubInfoLoader} from './components/Github/Github.jsx'
// first method of syntax

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>,
//     },
//     {
//       path:"About",
//       element: <About/>,
//     } ,                                
//     {
//       path:"Contact-us",
//       element: <Contact/>,
//     } ,                                 
//     {
//       path:'User/:Userid',
//       element: <User/>,
//     }                                  
//     ]
//   }
// ])

// second method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
