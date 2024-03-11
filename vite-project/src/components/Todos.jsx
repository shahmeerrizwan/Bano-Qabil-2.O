// import { memo } from "react";

// const Todos = ({ todos, addTodo }) => {
//     // console.log("child render");
//     return (
//         <>
//             <h2>My Todos</h2>
//             {todos.map((todo, index) => {
//                 return <p key={index}>{todo}</p>;
//             })}
//             <button onClick={addTodo}>Add Todo</button>
//         </>
//     );
// };

// export default memo(Todos);


import { useReducer, useState } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state, action) => {
    console.log("state: ", state);
    console.log("action: ", action, action.type);
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    // const [todos, setTodos] = useState(initialTodos);
    console.log(todos);

    const handleComplete = (completedTodo) => {
        console.log(completedTodo);
        dispatch({ type: "COMPLETED", id: completedTodo.id });

        // const updatedTodos = todos.map(todo => {
        //     console.log(todo);

        //     if (todo.id === completedTodo.id) {
        //         return { ...todo, complete: true }
        //     } else {
        //         return todo
        //     }
        // })
        // const updatedTodos = todos.map(todo => todo.id === completedTodo.id ? { ...todo, complete: true } : todo)
        // setTodos(updatedTodos)
        // console.log({ updatedTodos });

        // setTodos(prevState => [...prevState,])
    };

    return (
        <div >
            {/* <h1 >Hello</h1> */}
            {todos.map((todo) => {
                // console.log(todo);
                return (
                    <div key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo)}
                            />
                            {todo.title}
                        </label>
                    </div>
                )
            })}
        </div>
    );
}


