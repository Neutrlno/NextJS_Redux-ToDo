import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/redux/slice";

interface TodoProps {
    item: TodoItem;
}
const Todo: FC<TodoProps> = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div
            id={item.id}
            className="flex gap-1"
        >
            {item.text}
            <button
                className="px-1 rounded bg-red-800 active:bg-slate-600"
                onClick={(e) => dispatch(removeTodo(item.id))}
            >
                delete
            </button>
        </div>
    );
};

export default Todo;
