import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Error from './Error';

import {Route, Routes} from "react-router-dom";

function App(){

    return(
        <>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/*" element={<Error />} />
                </Routes>
            <Contact/>
        </>
    );
}

export default App