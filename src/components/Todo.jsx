import PropTypes from "prop-types";

export default function Todo({ todo, onChange }) {
  return (
    <li className="flex items-start" key={todo.id}>
      <label htmlFor={todo.id}>{todo.title}</label>
      <input
        type="checkbox"
        id={todo.id}
        onChange={onChange}
        checked={todo.completed}
      />
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};
