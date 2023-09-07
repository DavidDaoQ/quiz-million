import React, { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        placeholder="Nhập tên bạn vào đây..."
        className="startInput"
        ref={inputRef}
      />
      <button onClick={handleClick} className="startButton">
        Bắt đầu
      </button>
    </div>
  );
}
