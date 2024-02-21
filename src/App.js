import {Route, Routes} from "react-router";

import Home from "./pages/home/home";
import Messages from "./pages/messages/messages";
import Settings from "./pages/settings/settings";

function App() {
    return (

        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>

        </div>

    );


}

export default App
