import './App.css'
import {MouseEvent} from "react";



function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello! I'm Vasya!")
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log("Hello! I'm Ivan!")
    // }

    const onClickHandler = (name: string) => {
      console.log(name);
    }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }


    return (
        <>
            {/*<button onClick={(event)=> {console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>*/}

            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>

            {/*<button onClick={() => onClickHandler('some info')}>MyYouTubeChanel-3</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}
        </>
    )
}

export default App

