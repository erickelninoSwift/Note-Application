import { useReducer, useContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import context from "./components/context/context";
import TodoReducer from "./components/context/reducer";
import DispalyNotes from "./components/DispalyNotes";
const initialState = {
  todo: [],
  editMode: false,
  edit: {},
};
function App() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);
  const [editNotes, setEditNotes] = useState("");
  const handleEditing = (idElement, data) => {
    console.log(data, idElement);
  };
  return (
    <context.Provider value={{ todos, dispatch }}>
      <>
        <div className="m-4">
          <h1 className="text-3xl text-stone-600 text-center">
            Note Application
          </h1>
        </div>
        <Form />
        <DispalyNotes />
      </>
    </context.Provider>
  );
}

export default App;
