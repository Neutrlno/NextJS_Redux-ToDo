import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, adjust } from "@/redux/slice";
import { RootState } from "@/redux/store";

const TodoTools = () => {
    const [inputText, setInputText] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const dispatch = useDispatch();
    const completed = useSelector((state: RootState) => state.counter);
    const addTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addTodo(inputText));
        setInputText("");
    };

    return (
        <div className="flex flex-col gap-1 items-center">
            TodoList {' ' + completed}
            <div className="flex gap-2">
                <input
                    id="todo-text"
                    className="w-52 p-1 text-black font-semibold text-lg"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="p-1 bg-blue-500" onClick={addTodoHandler}>add</button>
                <input
                    id="adjust-value"
                    className="w-16 p-1 text-black font-semibold text-lg"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <button className="p-1 bg-blue-500" onClick={() => dispatch(adjust(number))}>adjust</button>
            </div>
        </div>
    );
};

export default TodoTools;
