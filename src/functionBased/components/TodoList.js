/* eslint-disable react/prop-types */

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    deleteTodoProps, handleChangeProps, setUpdate, todos,
  } = props;

  return (
    <ul>
      {
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              setUpdate={setUpdate}
            />
          ))
        }
    </ul>
  );
};

export default TodoList;
