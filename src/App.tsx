import './App.css'




function App() {
    const myFirstSubscriber = () => {
        console.log("Hello! I'm Vasya!")
    }


    return (
        <>
            <button onClick={()=> {console.log('Hello!')}}>MyYouTubeChanel-1</button>
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-2</button>
        </>
    )
}

export default App

