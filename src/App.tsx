import './App.css'
import {useState} from "react";
import {FullInput} from "./components/FullInput.tsx";



function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])



    return (
       <div className={'App'}>
           <FullInput/>
           {message.map((el,index) => {
               return (
                   <div key={index}>{el.message}</div>
               )
           })}
       </div>
    )
}

export default App

