export const people = [
    {id: 1, name: 'Anna', age: 15},
    {id: 2, name: 'Bob', age: 25},
    {id: 3, name: 'Dany', age: 35},
]

type PeopleDataTypes = {
    people: PeopleTypes[]
};

type PeopleTypes = {
    id: number
    name: string
    age: number
}

export const People = (props: PeopleDataTypes) => {
    return (
        <table>
            <thead>
                <tr>
                    {props.people.map(person => {
                        return (
                            <th key={person.id}>{person.name}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.people.map(person => {
                        return (
                            <td>{person.age}</td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    );
};

