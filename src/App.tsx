import './App.css'
import {useState} from "react";




function App() {
    const [money, setMoney] = useState([
        { banknote: 'Dollars', nominal: 100, number: ' a1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' z1234567890' },
        { banknote: 'RUBLS', nominal: 100, number: ' w1234567890' },
        { banknote: 'Dollars', nominal: 100, number: ' e1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' c1234567890' },
        { banknote: 'RUBLS', nominal: 100, number: ' r1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' x1234567890' },
        { banknote: 'RUBLS', nominal: 50, number: ' v1234567890' },
    ])

    return (
        <ul>
            {money.map((objForMoneyArr: {banknote: string, nominal: number, number: string}) => {
                return (
                    <li>
                        <span>{objForMoneyArr.banknote}</span>
                        <span>{objForMoneyArr.nominal}</span>
                        <span>{objForMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default App

