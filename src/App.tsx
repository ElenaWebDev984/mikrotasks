import './App.css'
import {NewComponent, students} from "./site/NewComponent.tsx";
import {NewComponentTopCars, topCars} from "./site/NewComponentTopCars.tsx";
import {cities, Cities} from "./site/Cities.tsx";
import {people, People} from "./site/People.tsx";



function App() {
    return (
        <>
            <NewComponent students={students}/>
            <NewComponentTopCars topCars={topCars} />
            <Cities cities={cities} />
            <People people={people} />
        </>
    )
}

export default App

