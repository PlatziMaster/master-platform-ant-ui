import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import endPoints from './endpoints';

export function CreateTodo(options) {
  return useMutation(
    body => axios.post(endPoints.todos.create, body).then((res) => res.data),
    options
  );
}

export const stateTodos = 'todos';
export function GetTodos() {
  return useQuery([stateTodos], async () => {
    const response = await axios.get(endPoints.todos.getAll);
    return response.data;
  });
}

export function UpdateTodos(options) {
  return useMutation(
    values => {
      const { id, body } = values;
      return axios.put(endPoints.todos.update(id), body).then((res) => res.data);
    },
    options
  );
}
