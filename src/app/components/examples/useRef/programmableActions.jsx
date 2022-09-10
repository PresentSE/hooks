import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="" className="form-label"></label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Кнопка
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
