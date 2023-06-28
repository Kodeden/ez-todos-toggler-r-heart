import PropTypes from "prop-types";

export default function Todo({ todo, onChange }) {
  return (
    <li key={todo.id}>
      <div className="flex items-center rounded border-2 border-[#2d1b3c] pl-2 dark:border-[#2d1b3c]">
        <input
          className="::checked h-4 w-4 rounded border-black checked:border-black checked:bg-[#255957] checked:text-[#547786] dark:border-black dark:bg-[#0e0e52]"
          type="checkbox"
          id={todo.id}
          onChange={onChange}
          checked={todo.completed}
        />
        <label className="ml-4 text-[#a7acd9]" htmlFor={todo.id}>
          {todo.title}
        </label>
      </div>
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
