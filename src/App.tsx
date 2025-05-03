import './App.css'
import {useState} from "react";
import {Input} from "./components/Input.tsx";
import {ButtonForInput} from "./components/ButtonForInput.tsx";



function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

let [title, setTitle] = useState('')   // TODO выносим локальный стейт в родит. компоненту, чтобы мы могли передать ее в button

const addMessage = (title: string) => {
    let newMessage = {message: title};
    setMessage([newMessage, ...message])
}

const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('')
}

    return (
       <div className={'App'}>
          <Input setTitle={setTitle} title={title} />
           <ButtonForInput name={'+'} callback={callBackButtonHandler}/>
           {message.map((el,index) => {
               return (
                   <div key={index}>{el.message}</div>
               )
           })}
       </div>
    )
}

export default App

