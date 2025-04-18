import './App.css'
import {Button} from "./components/Button.tsx";



function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3Foo = () => {
        console.log("I'm stupid button");
    }

    return (
        <>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo("I'm Vasya", 21, 'Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() =>  Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid button"} callBack={Button3Foo}/>
        </>
    )
}

export default App

