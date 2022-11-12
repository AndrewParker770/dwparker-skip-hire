import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';

import Error from './pages/Error';
import Faq from './pages/Faq';


import {Route, Routes} from "react-router-dom";

function App(){

    return(
        <>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            <Contact/>
        </>
    );
}

export default App