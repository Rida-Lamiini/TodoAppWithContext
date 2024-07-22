import React, { createContext, useEffect, useReducer } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'SET_TODOS':
            return action.payload;
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            dispatch({ type: 'SET_TODOS', payload: JSON.parse(storedTodos) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
