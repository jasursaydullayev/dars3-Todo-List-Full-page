import Navbar from "./components/Navbar";
import TodoList from './components/TodoList'
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false)
  const handleClick = () => setDark(!dark)
  return (
    <div className={`h-full wrapper ${dark ? "dark": "" } transition-all ease-in`} >
      <Navbar handleClick={handleClick} />
      <TodoList/>
    </div>
  );
}

export default App;
