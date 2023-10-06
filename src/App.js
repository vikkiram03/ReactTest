import './App.css';
// import F1 from "./components/F1";

// Import bootstrap here, instead of in all components
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Import Nav
import Nav from "./components/Nav";

import {HashRouter, Routes, Route} from "react-router-dom";
import {Home, About, Blog} from "./components/F2";

import Contact from './components/Contact';

function App() {
  return (
    <div>
        {/* <F1 /> */}
        <HashRouter>
        <Nav />
            {/* In the output, write the url as
            http://localhost:3000/#/<comp name> */}
            {/* We have to use "#" since we are using a HashRouter */}
            <Routes>
                {/* 
                http://localhost:3000/ -> Home component should be opened
                http://localhost:3000/home -> Home component should be opened
                http://localhost:3000/about -> About component should be opened
                http://localhost:3000/blog -> Blog component should be opened
                */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Blog" element={<Blog />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </HashRouter>

        {/* <Contact /> */}
    </div>
  );
}

export default App;
