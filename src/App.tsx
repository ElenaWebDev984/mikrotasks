import './App.css'
import {NewComponent, students} from "./site/NewComponent.tsx";




function App() {
    return (
        <>
          <NewComponent students={students} />
        </>
    )
}

export default App

