import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";

function App() {
  const [todos, setTodos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const handleChange = (event) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id.toString() === event.target.id) {
          return { ...todo, completed: event.target.checked };
        }
        return todo;
      });
    });
  };

  const numOfCompletedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <main className="bg-[#372554]">
      <h1 className=" border-gray-900 bg-[#372554] pb-4 pt-4 text-center text-3xl font-bold  text-[#7c9eb2]">
        {numOfCompletedTodos} of {todos.length} To Dos Completed
      </h1>

      <ul className=" mx-[300px] bg-[#52528c] text-2xl">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} />
        ))}
      </ul>
    </main>
  );
}

export default App;
