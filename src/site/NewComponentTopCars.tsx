

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
]

type NewComponentTopCarsPropsType = {
    topCars: TopCarsType[]
}


type TopCarsType = {
    manufacturer: string
    model: string
}


export const NewComponentTopCars = (props: NewComponentTopCarsPropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr key={index}>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};