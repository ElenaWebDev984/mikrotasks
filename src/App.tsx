import './App.css'
import {useState} from "react";
import {NewComponentForFilterTask} from "./NewComponentForFilterTask.tsx";

export type FilterType = 'all' | 'ruble' | 'dollar';


function App() {
    const [money, setMoney] = useState([
        { banknote: 'Dollars', nominal: 100, number: ' a1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' z1234567890' },
        { banknote: 'RUBLES', nominal: 100, number: ' w1234567890' },
        { banknote: 'Dollars', nominal: 100, number: ' e1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' c1234567890' },
        { banknote: 'RUBLES', nominal: 100, number: ' r1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' x1234567890' },
        { banknote: 'RUBLES', nominal: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState('all')


    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'RUBLES')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'Dollars')
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
       <>
           <NewComponentForFilterTask
               currentMoney={currentMoney}
               onClickFilterHandler={onClickFilterHandler}/>
       </>
    )
}

export default App

