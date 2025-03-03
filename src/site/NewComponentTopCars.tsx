import * as React from "react";

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
]

type NewComponentTopCarsPropsType = {
    topCars: TopCarsType[]
}


type TopCarsType = {
    key: keyof TopCarsType
    index: React.Key
    manufacturer: string
    model: string

}


export const NewComponentTopCars = (props: NewComponentTopCarsPropsType) => {
    return (
        <table>
            {props.topCars.map((objectFromTopCarsArray) => {
                return (
                    <tr key={objectFromTopCarsArray.index}>
                        <th>{objectFromTopCarsArray.key}</th>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

// <table>
//     <tr>
//         <th>Month</th>
//         <th>Savings</th>
//     </tr>
//     <tr>
//         <td>January</td>
//         <td>$100</td>
//     </tr>
//     <tr>
//         <td>February</td>
//         <td>$80</td>
//     </tr>
// </table>