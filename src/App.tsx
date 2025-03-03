import './App.css'
import {Header} from "./site/Header.tsx";
import {Body} from "./site/Body.tsx";
import {Footer} from "./site/Footer.tsx";


function App() {
    return (
        <>
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer title={'NEW FOOTER'}/>
        </>
    )
}

export default App

