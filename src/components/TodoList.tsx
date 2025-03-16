import Todo from "./Todo";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos);
    return (
        <div className="w-fit mx-auto">
            {todos.map((todo: TodoItem) => (
                <Todo key={todo.id} item={todo} />
            ))}
        </div>
    );
};

export default TodoList;
