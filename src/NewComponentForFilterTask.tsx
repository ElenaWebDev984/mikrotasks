import {FilterType} from "./App.tsx";

type MoneyType ={
    banknote: string
    nominal: number
    number: string
}

type NewComponentType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponentForFilterTask = ({currentMoney, onClickFilterHandler}: NewComponentType) => {
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
                <button onClick={ () => onClickFilterHandler('all')}>all</button>
                <button onClick={ () => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={ () => onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>
    );
};

