import './App.css'
import {useState} from "react";




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

    const currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'RUBLES')

    return (
       <>
           <ul>
               {currentMoney.map((objForMoneyArr: {banknote: string, nominal: number, number: string}, index) => {
                   return (
                       <li key={index}>
                           <span>{objForMoneyArr.banknote}</span>
                           <span>{objForMoneyArr.nominal}</span>
                           <span>{objForMoneyArr.number}</span>
                       </li>
                   )
               })}
           </ul>
          <div style={{marginLeft: '35px'}}>
              <button>all</button>
              <button>ruble</button>
              <button>dollar</button>
          </div>
       </>
    )
}

export default App

