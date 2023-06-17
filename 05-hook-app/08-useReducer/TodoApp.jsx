import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
    // {
    //     id: new Date().getTime() * 3,
    //     description: "make $$$",
    //     done: false,
    // },
];

const init = () => {
    let dataInLocal = localStorage.getItem("task");
    return dataInLocal ? JSON.parse(dataInLocal) : [];
};
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add todo",
            payload: todo,
        };
        dispatch(action);
    };

    return (
        <>
            <h1>
                TodoApp: 10 <small>pendientes: 2</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* {TodoList} */}
                    <TodoList todos={todos} />
                    {/* {TodoList} */}
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
