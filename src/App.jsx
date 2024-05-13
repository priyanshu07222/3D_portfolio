import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components/index.js'
import Layout from "./Layout.jsx"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route path="about" element={<About/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
