import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {HomePage} from "./pages/HomePage";
import {Route, Routes} from 'react-router-dom';
import {NotFound} from "./pages/NotFound";
import {Details} from "./pages/Details";

function App() {
    return <>
        <Header/>
        <Main>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/country/:name" element={<Details/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Main>
    </>
}

export default App;
