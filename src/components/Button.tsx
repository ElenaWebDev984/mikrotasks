type ButtonType = {
    name: string
}

export const Button = ({name}: ButtonType) => {
    return (
        <button>{name}</button>
    )
}