import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Blog from "./components/blog/Blog.jsx"
import About from "./components/about/About.jsx"


function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Blog />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App

