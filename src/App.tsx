import './App.css'
import {useState} from "react";
import {NewComponentForFilterTask} from "./NewComponentForFilterTask.tsx";

type filterType = 'all' | 'ruble' | 'dollar';


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


    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton);
    }

    return (
       <>
           <NewComponentForFilterTask/>

          {/* <ul>*/}
          {/*     {currentMoney.map((objForMoneyArr: {banknote: string, nominal: number, number: string}, index) => {*/}
          {/*         return (*/}
          {/*             <li key={index}>*/}
          {/*                 <span>{objForMoneyArr.banknote}</span>*/}
          {/*                 <span>{objForMoneyArr.nominal}</span>*/}
          {/*                 <span>{objForMoneyArr.number}</span>*/}
          {/*             </li>*/}
          {/*         )*/}
          {/*     })}*/}
          {/* </ul>*/}
          {/*<div style={{marginLeft: '35px'}}>*/}
          {/*    <button onClick={ () => onClickFilterHandler('all')}>all</button>*/}
          {/*    <button onClick={ () => onClickFilterHandler('ruble')}>rubles</button>*/}
          {/*    <button onClick={ () => onClickFilterHandler('dollar')}>dollars</button>*/}
          {/*</div>*/}
       </>
    )
}

export default App

