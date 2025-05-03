import {ChangeEvent} from "react";

type InputPropsType = {
    title: string   // TODO для синхронизации инпута
    setTitle: (title:string) => void   // TODO чтобы мы могли передавать значения
}


export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

