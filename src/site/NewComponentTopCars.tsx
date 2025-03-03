export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
];


type NewComponentTopCarsPropsType = {
    topCars: TopCarsType[];
};


type TopCarsType = {
    manufacturer: string;
    model: string;
};


// Функция для преобразования ключей в читаемый формат
const formatHeader = (header: string) => {
    return header.charAt(0).toUpperCase() + header.slice(1);
};


export const NewComponentTopCars = (props: NewComponentTopCarsPropsType) => {

    const headers = props.topCars.length > 0
        ? (Object.keys(props.topCars[0]) as (keyof TopCarsType)[])
        : [];

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{formatHeader(header)}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((objectFromTopCarsArray, index) => (
                <tr key={index}>
                    {headers.map((header) => (
                        <td key={header}>
                            {objectFromTopCarsArray[header]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};