export const cities = [
    {id: 1, name: 'Barcelona', country: 'Spain'},
    {id: 2, name: 'Madrid', country: 'Spain'},
    {id: 3, name: 'Santander', country: 'Spain'},
]

type CitiesDataTypes = {
    cities: CitiesTypes[]
}

type CitiesTypes = {
    id: number
    name: string
    country: string
};

export const Cities = (props: CitiesDataTypes) => {
    return (
        <ul>
            {props.cities.map((city) => {
                return (
                    <li key={city.id}>
                        {city.name}
                        {city.country}
                    </li>
                )
            })}
        </ul>
    )
};