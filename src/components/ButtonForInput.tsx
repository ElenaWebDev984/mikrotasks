type ButtonForInputProps = {
    name: string
    callback: ()=> void
}

export const ButtonForInput = (props: ButtonForInputProps) => {
    const onClickButtonHandler = () => {
        props.callback();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

