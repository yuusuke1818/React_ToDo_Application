import React from "react";

export const InputTodo = (props) => {
  const { value, onChange, onClick, disabled } = props;

  return (
    <div className="input-area">
      <input
        disabled={disabled}
        className="input"
        placeholder="TODOを入力"
        value={value}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
