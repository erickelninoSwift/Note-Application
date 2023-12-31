import React, { useContext } from "react";
import contextTodo from "./context/context";
import { DELETE, EDIT_TODO } from "./context/action.type";

export const ListElement = ({ listData, idElement }) => {
  const { dispatch } = useContext(contextTodo);

  return (
    <div className="rounded border-2 p-[20px]">
      <h2>{listData}</h2>
      <button
        className="rounded border-2 p-[5px] mt-2"
        onClick={() => dispatch({ type: DELETE, payload: idElement })}
      >
        Delete[X]
      </button>
      <button
        className="rounded border-2 p-[5px] mt-2"
        onClick={() =>
          dispatch({
            type: EDIT_TODO,
            payload: { id: idElement, data: listData },
          })
        }
      >
        Edit[...]
      </button>
    </div>
  );
};
