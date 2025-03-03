import './App.css'
import {NewComponent, students} from "./site/NewComponent.tsx";
import {NewComponentTopCars, topCars} from "./site/NewComponentTopCars.tsx";


function App() {
    return (
        <>
            <NewComponent students={students}/>
            <NewComponentTopCars topCars={topCars} />
        </>
    )
}

export default App

