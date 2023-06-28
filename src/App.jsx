import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";

function App() {
  const [todos, setTodos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleChange = (event) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id.toString() === Number(event.target.id)) {
          return { ...todo, completed: event.target.checked };
        }
        return todo;
      });
    });
  };

  const numOfCompletedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        {numOfCompletedTodos} of {todos.length} To Dos Completed
      </h1>

      <ul className="flex flex-col">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} />
        ))}
      </ul>
    </>
  );
}

export default App;
