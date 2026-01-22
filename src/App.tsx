import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home.tsx"
import Committee from "./pages/Committee.tsx"
import Projects from "./pages/Projects.tsx"
import ContactUs from "./pages/ContactUs.tsx"
import ScrollToTop from "./ScrollToTop.tsx"
import NavBar from "./NavBar.tsx"

export default function App() {

    return (   
        <BrowserRouter>
            <NavBar/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/committee" element={<Committee/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
            </Routes>
        </BrowserRouter>
    )
}