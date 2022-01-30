import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number,
    title: string,
    completed: boolean,
};

axios.get(url).then((response) => {
    const todo = response.data as Todo;

    console.log(`
        The Todo with id: ${todo.id}
        Has a title of: ${todo.title}
        Is it completed: ${todo.completed}
    `);
})