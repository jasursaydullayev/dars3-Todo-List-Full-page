import { useState } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
   const copyAllTodos = [...todos, text]
    setTodos(copyAllTodos);
    setText("")
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleDelete = (todo) => {
    const filteredTodos = todos.filter((t) => {
      return t !== todo
    })
    setTodos(filteredTodos)
  }
  return (
    <div className="cite-container text-center">
      <form onSubmit={handleSubmit}>
        <input
        value={text}
          onChange={handleChange}
          className="inputbekjon inputbek w-[540px] rounded-lg h-[64px] text-[19px] mt-[-50px] pl-[25px]"
          placeholder="Create a new todo…"
          type="text"
        />
      </form>
      <ul className="mt-[20px] flex flex-col gap-[3px]">
        {todos && todos.map((todo) => {
          return <div className="border-double inputbek border-2 w-[540px] h-[43px] border-black flex items-center justify-between rounded-lg px-2 py-2">
          <li className="text-[19px] ">
            {todo}
          </li>
          <h3 className="cursor-pointer" onClick={() => {handleDelete(todo)}}>✖</h3>
          </div>
        })}
      </ul>
    </div>
  );
}

export default TodoList;
