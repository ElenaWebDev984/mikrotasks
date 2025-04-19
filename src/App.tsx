import './App.css'
import {useState} from "react";




function App() {
    // let a = 1
    let [a, setA] = useState(1)
    // TODO a - это состояние (initial state/ local state), может быть чем угодно: [], {} и т.д.
    //  setA - это функция в которой находится состояние

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandler2 = () => {
        setA(0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}

export default App

