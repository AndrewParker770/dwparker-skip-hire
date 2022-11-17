import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';

import Error from './pages/Error';
import Faq from './pages/Faq';
import Contact2 from './pages/Contact2';
import Team from './pages/Team';
import Recycle from './pages/Recycle';
import Waste from './pages/Waste';
import Skips from './pages/Skips';

import {Route, Routes} from "react-router-dom";


function App(){

    return(
        <>
            <Navbar/>
                <Routes onRoute>
                    <Route path="/" element={<Home />}/>
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact" element={<Contact2 />} />
                    <Route path="/our-team" element={<Team />} />
                    <Route path="/recycled-materials" element={<Recycle />} />
                    <Route path="/waste-management" element={<Waste />} />
                    <Route path="/available-skips" element={<Skips />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            <Contact/>
        </>
    );
}

export default App